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
  background-image: url("http://labs.jensimmons.com/2016/examples/images/dirt.jpg");
  background-size: cover;
  padding: 2rem 0;
  color: #fff;
  border: 1px solid #000;

  text-shadow: 0px 1px 6px rgba(0, 0, 0, 0.6);
  h1 {
    width: 80%;
    margin: auto;
    line-height: 1.1em;
    font-size: 4rem;
    @media (min-width: 500px) {
      font-size: 5rem;
    }
  }
`;

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <StyledHeader>
        <h1>This is super duper fast 🚗</h1>
      </StyledHeader>
      <StyledSingleBlogPostArticle className="blog-post">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
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
