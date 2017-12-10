import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      {edges.map(({ node: post }) => {
        const { frontmatter } = post;
        return (
          <div>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
          }
        }
      }
    }
  }
`;
export default IndexPage;
