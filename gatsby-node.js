const path = require("path");

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
