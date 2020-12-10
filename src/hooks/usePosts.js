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
              headerImage {
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
  console.log(data.allMdx.edges);
  return {
    totalCount: data.allMdx.totalCount,
    posts: data.allMdx.edges.map(({ node: { frontmatter } }) => ({
      title: frontmatter.title,
      tags: frontmatter.tags,
      path: frontmatter.path,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      id: frontmatter.id,
      featuredImageSizes:
        frontmatter.featuredImage !== null
          ? frontmatter.featuredImage.childImageSharp.sizes
          : frontmatter.headerImage.childImageSharp.sizes,
    })),
  };
};

export default usePosts;
