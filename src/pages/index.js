import { Link, graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Home from "./Home/Home";
import styled from "styled-components";

const BlogArtikelWrapper = styled.div`
  background-color: ${props => props.theme.black};
  min-height: 300px;
  display: flex;
  justify-content: center;
`;

const BlogArtikel = styled.div`
  display: flex;
  width: 60%;
  margin: 2rem auto;
`;

const BlogArtikelHeader = styled.h2`
  font-size: 5rem;
  transform: rotate(-3deg);
  padding: 10px;
  margin: 10px;
  color: white;

  a {
    color: white;
  }
  a:hover {
    color: #f1c40f;
  }
`;

const BlogArtikelImageWrapper = styled.div`
  height: 200px;
  width: 200px;
  flex-direction: row;
`;

const BlogArtikelSingleWrapper = styled.div`
  flex-direction: row;
`;

const BlogArtikelHeaderTime = styled.time`
  font-size: 1.8rem;
  color: white;
  padding: 0.1em 0.25em;
  margin: 0.25em 0;
`;
const BlogArtikelHeaderTags = styled.span`
  font-size: 1.8rem;
  padding: 0.1em 0.25em;
  margin: 0.25em 0;
  color: white;
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Home />
      <main>
        {edges.map(({ node: post }) => {
          const { frontmatter } = post;
          return (
            <BlogArtikelWrapper>
              <BlogArtikel>
                <BlogArtikelImageWrapper>
                  <img
                    src="http://via.placeholder.com/200x200"
                    alt="placeholder"
                  />
                </BlogArtikelImageWrapper>
                <BlogArtikelSingleWrapper>
                  <BlogArtikelHeader>
                    <Link to={frontmatter.path}>{frontmatter.title}</Link>
                    <BlogArtikelHeaderTime>
                      {frontmatter.date}
                    </BlogArtikelHeaderTime>
                    <BlogArtikelHeaderTags>
                      {frontmatter.tags.map(tag => ` ${tag}`)}
                    </BlogArtikelHeaderTags>
                  </BlogArtikelHeader>
                  {frontmatter.excerpt}
                </BlogArtikelSingleWrapper>
              </BlogArtikel>
            </BlogArtikelWrapper>
          );
        })}
      </main>
    </Layout>
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
