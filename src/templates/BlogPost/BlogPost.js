import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';
import { StyledSingleBlogPostArticle } from './StyledBlogPost';

const StyledHeader = styled.header`
  .gatsby-image-wrapper {
    width: 100%;
    height: 400px;
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

const StyledBlogBottomNav = styled.div`
  display: grid;
  justify-content: center;
  font-size: 2rem;
  a {
    color: ${props => props.theme.colors.primary};
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
          sizes={post.frontmatter.headerImage.childImageSharp.sizes}
          alt={`background image which represents - ${post.frontmatter.title}`}
        />
        <h1>{post.frontmatter.title}</h1>
      </StyledHeader>
      <StyledInfo>
        {post.frontmatter.date}, {post.frontmatter.tags.map(tag => ` ${tag}`)}
      </StyledInfo>
      <StyledSingleBlogPostArticle className="blog-post">
        <Helmet title={`JCofman - ${post.frontmatter.title}`} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <StyledBlogBottomNav>
          {prev && (
            <>
              Previous Post:
              <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>
            </>
          )}
          {next && (
            <>
              Next Post:
              <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>
            </>
          )}
        </StyledBlogBottomNav>
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
        headerImage {
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
