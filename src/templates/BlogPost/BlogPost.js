import React from 'react';
import styled, { css } from 'styled-components';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import { StyledSingleBlogPostArticle } from './StyledBlogPost';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    `}
  &:hover, &:focus {
    cursor: pointer;
  }
`;

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
    font-size: 4rem;

    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
    ${props => props.theme.small} {
      font-size: 6rem;
    }
    ${props => props.theme.medium} {
      font-size: 8rem;
    }
  }
`;

const StyledBlogBottomNav = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  a {
    color: ${props => props.theme.colors.primary};
  }
`;

const StyledInfo = styled.div`
  text-align: center;
  margin: 1rem;
`;

const StyledTags = styled.div`
  font-style: italic;
`;

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <SEO
        title={`JCofman - ${post.frontmatter.title}`}
        description={
          post.frontmatter.description || post.frontmatter.excerpt || `nothin’`
        }
        image={post.frontmatter.headerImage.childImageSharp.sizes.src}
        pathname={post.frontmatter.path}
        article
      />
      <StyledHeader>
        <Img
          sizes={post.frontmatter.headerImage.childImageSharp.sizes}
          alt={`background image which represents - ${post.frontmatter.title}`}
        />
        <h1>{post.frontmatter.title}</h1>
      </StyledHeader>
      <StyledInfo>
        {post.frontmatter.date}
        <StyledTags>
          {post.frontmatter.tags.map((tag, index, allTags) => {
            if (allTags.length - 1 === index) {
              return ` ${tag}`;
            } else {
              return ` ${tag},`;
            }
          })}
        </StyledTags>
      </StyledInfo>
      <StyledSingleBlogPostArticle className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <StyledBlogBottomNav>
          {prev && (
            <Link to={prev.frontmatter.path}>
              <small>{prev.frontmatter.title}</small>
              <StyledButton>
                <FaChevronLeft /> Previous Post
              </StyledButton>
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.path}>
              <small>{next.frontmatter.title}</small>
              <StyledButton>
                <FaChevronRight /> Next Post
              </StyledButton>
            </Link>
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
        excerpt
        headerImage {
          childImageSharp {
            sizes(maxWidth: 2024) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
