const path = require(`path`);

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/BlogPost/BlogPost.js`);

  return graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        nodes {
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panic(`failed to create posts`, result.errors);
    }

    const posts = result.data.allMdx.nodes;
    posts.forEach(({ frontmatter }, index) => {
      createPage({
        path: frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].frontmatter,
          next: index === posts.length - 1 ? null : posts[index + 1].frontmatter,
        }, // additional data can be passed via context,
      });
    });
  });
};
