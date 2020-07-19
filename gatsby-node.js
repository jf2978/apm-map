const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const profileTemplate = path.resolve(`src/templates/profileTemplate.js`);

  return graphql(`
    query mentorsWithResourcesQuery {
      allMentorsJson {
        nodes {
          name
          image
          bio
          recommendations
          fields {
            slug
          }
        }
      }
      allResourcesJson {
        nodes {
          id
          link
          name
          tags
          category
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMentorsJson.nodes.forEach(({ mentorsNode }) => {
      const recommendations = result.data.allResourcesJson.nodes.filter(
        ({ resourcesNode }) => {
          return mentorsNode.recommendations.includes(resourcesNode.id);
        }
      );
      console.log(mentorsNode);
      console.log(recommendations);
      createPage({
        path: mentorsNode.fields.slug,
        component: profileTemplate,
        context: {
          recommendations: recommendations,
          name: mentorsNode.name,
          image: image,
          bio: bio,
          slug: mentorsNode.fields.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MentorsJson") {
    //console.log(node);

    const slug = `/mentors/${node.name}`.split(" ").join("-").toLowerCase();

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
