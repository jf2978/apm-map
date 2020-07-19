const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const profileTemplate = path.resolve(`src/templates/profileTemplate.js`);

  return graphql(`
    query mentorsQuery {
      allMentorsJson {
        edges {
          node {
            bio
            added
            id
            image
            name
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

    result.data.allMentorsJson.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: profileTemplate,
        context: { slug: node.fields.slug },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MentorsJson") {
    console.log(node);

    const slug = `/mentors/${node.name}`.split(" ").join("-").toLowerCase();

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
