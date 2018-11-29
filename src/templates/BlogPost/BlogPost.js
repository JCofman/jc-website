import React from "react";
import Helmet from "react-helmet";
import posed from "react-pose";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";
import { StyledSingleBlogPostArticle } from "./StyledBlogPost";

// Use `posed.div` elements anywhere on the pages.
const Transition = posed.div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

const StyledHeader = styled.header`
  display: flex;
  height: 500px;
  height: 100vh;
  background: #2e1811;
  background-image: url(${props =>
    `https://source.unsplash.com/1600x900/?${props.title}`});
  background-size: cover;
  padding: 2rem 0;
  color: #fff;
  border: 1px solid #000;
  h1 {
    width: 80%;
    margin: auto;
    line-height: 1.1em;
    font-size: 8rem;
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
    ${props => props.theme.small} {
      font-size: 4rem;
    }
  }
`;

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <StyledHeader title={post.frontmatter.path}>
        <h1>This is super duper fast 🚗</h1>
      </StyledHeader>
      <StyledSingleBlogPostArticle className="blog-post">
        <Helmet title={`JCofman - ${post.frontmatter.title}`} />
        <Transition>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </Transition>
      </StyledSingleBlogPostArticle>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
