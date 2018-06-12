import Link from "gatsby-link";
import React from "react";
import Home from "./Home/Home";
import styled from "styled-components";

const BlogArtikelWrapper = styled.div`
  background-color: black;
  height: 1024px;
  display: flex;
  justify-content: center;
`;

const BlogArtikel = styled.div`
  margin: 50px;
  display: flex;
`;

const BlogArtikelHeader = styled.div`
  font-size: 50px;
`;

const BlogArtikelImage = styled.div``;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Home />
      <main>
        {edges.map(({ node: post }) => {
          const { frontmatter } = post;
          return (
            <BlogArtikelWrapper>
              <BlogArtikel>
                <BlogArtikelHeader>
                  <h2>
                    <Link to={frontmatter.path}>{frontmatter.title}</Link>
                  </h2>
                </BlogArtikelHeader>
              </BlogArtikel>
            </BlogArtikelWrapper>
          );
        })}
      </main>
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
