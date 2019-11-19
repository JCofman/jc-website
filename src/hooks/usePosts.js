import { graphql, useStaticQuery } from 'gatsby';

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
              tags
              excerpt
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 250, maxHeight: 250) {
                    sizes
                    src
                    aspectRatio
                    srcSet
                    srcSetWebp
                    srcWebp
                    tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return {
    totalCount: data.allMdx.totalCount,
    posts: data.allMdx.edges.map(post => ({
      title: post.node.frontmatter.title,
      tags: post.node.frontmatter.tags,
      path: post.node.frontmatter.path,
      excerpt: post.node.frontmatter.excerpt,
      date: post.node.frontmatter.date,
      id: post.node.id,
      featuredImageSizes: post.node.frontmatter.featuredImage.childImageSharp.sizes,
    })),
  };
};

export default usePosts;
