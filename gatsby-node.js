const path = require("path");
const gaxios = require("gaxios");
const { getAuthToken, getSpreadsheet } = require("./gsheets.js");

// called after all source plugins have created nodes
// sourceNodes manually creates nodes (useful for making build-time API calls)
// It also has the added benefit of allowing me to explicitly define and shape nodes.
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // 1. Pull data from Google Sheets
  const spreadsheetID = process.env.SPREADSHEET_ID;
  const auth = await getAuthToken();
  const response = await getSpreadsheet({
    spreadsheetId: spreadsheetID,
    auth: auth,
    sheetName: "PM Recruiting Resources",
  });

  // 2. Transform Google Sheets API response into array of objects (instead of array of arrays)
  const values = response.data.values;
  let rows = [];
  for (var i = 1; i < values.length; i++) {
    var rowObject = {};
    for (var j = 0; j < values[i].length; j++) {
      var value = values[i][j].length === 0 ? null : values[i][j];
      rowObject[values[0][j]] = value;
    }

    // split comma-separated tags into an array if non-null
    rowObject.tags = rowObject.tags
      ? rowObject.tags.split(",")
      : rowObject.tags;

    rows.push(rowObject);
  }

  // 3. Create Gatsby nodes from the sanitized Google Sheets data
  rows.map((row, index) => {
    const node = {
      id: createNodeId(`${index}`),
      parent: `__SOURCE__`,
      internal: {
        type: `RecruitingResource`, // name of the GraphQL query --> allItem {}
        contentDigest: createContentDigest(value),
      },
      children: [],
      name: row.name,
      link: row.link,
      category: row.category,
      type: row.type,
      description: row.description,
      tags: row.tags,
      image: row.image,
    };

    createNode(node);
  });
};

// the "node" can be any object, and is the center of Gatsby's data system (supported by Redux for state management)
// onCreateNode is called whenever a node is created (directly or from plugins)
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MentorsJson") {
    const slug = `/mentors/${node.name}`.split(" ").join("-").toLowerCase();

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// called after sourcing and transformation of nodes
// createPages programmatically creates pages (often using GraphQL-queried data)
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const profileTemplate = path.resolve(`src/templates/profileTemplate.js`);
  return graphql(`
    query mentorsWithResourcesQuery {
      allMentorsJson {
        edges {
          node {
            name
            image
            bio
            recommendations
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // for each mentor, create a page with a custom slug (see onCreateNode)
    // and list of recommendations passed as page context
    result.data.allMentorsJson.edges.forEach((mentor) => {
      createPage({
        path: mentor.node.fields.slug,
        component: profileTemplate,
        context: {
          recommendations: mentor.node.recommendations,
          slug: mentor.node.fields.slug,
        },
      });
    });
  });
};
