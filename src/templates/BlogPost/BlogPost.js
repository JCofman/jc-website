import React from "react";
import Helmet from "react-helmet";
import posed from "react-pose";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

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
  .gatsby-image-wrapper {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  h1 {
    margin: 0 1rem;
    text-align: center;
    -webkit-transform: skew(-5deg) rotate(-1deg);
    -ms-transform: skew(-5deg) rotate(-1deg);
    transform: skew(-5deg) rotate(-1deg);
    margin-top: -6rem;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    width: 80%;
    background-color: ${props => props.theme.colors.primary};
    transition: color ${props => props.theme.themeTransition};
    line-height: 1.1em;
    font-size: 8rem;
    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
    ${props => props.theme.small} {
      font-size: 4rem;
    }
  }
`;

const StyledInfo = styled.p`
  text-align: center;
  margin: 1rem;
`;

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <StyledHeader>
        <Img
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          alt={`background image which represents - ${post.frontmatter.title}`}
        />
        <h1>{post.frontmatter.title}</h1>
      </StyledHeader>
      <StyledInfo>
        {post.frontmatter.date}, {post.frontmatter.tags.map(tag => ` ${tag}`)}
      </StyledInfo>
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
        tags
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1024, maxHeight: 300) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
