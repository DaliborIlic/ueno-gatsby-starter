const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};


const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const workPostTemplate = path.resolve(`src/templates/workTemplate.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: workPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}