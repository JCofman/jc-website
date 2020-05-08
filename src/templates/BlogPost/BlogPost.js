import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import { StyledSingleBlogPostArticle } from './StyledBlogPost';

const StyledButtonColor = theme(`mode`, {
  light: (props) => props.theme.colors.black,
  dark: (props) => props.theme.colors.white,
});

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${StyledButtonColor};
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
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
    background-color: ${(props) => props.theme.colors.primary};
    transition: color ${(props) => props.theme.themeTransition};
    line-height: 1.1em;
    font-size: 4rem;

    text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
    ${(props) => props.theme.small} {
      font-size: 6rem;
    }
    ${(props) => props.theme.medium} {
      font-size: 8rem;
    }
  }
`;

const StyledBlogBottomNav = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  a {
    margin: 1rem 2rem;
    color: ${(props) => props.theme.colors.primary};
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
  const { mdx: post } = data;
  const { next, prev } = pageContext;
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <Layout>
      <SEO
        title={`Rodolfo Olivieri - ${post.frontmatter.title}`}
        description={post.frontmatter.description || post.frontmatter.excerpt || `nothing’`}
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
        <div className="blog-post-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>

        <svg
          css={`
            display: none;
            ${(props) => props.theme.large} {
              display: block;
              position: fixed;
              bottom: 30px;
              left: 70px;
              width: 120px;
              height: 120px;
            }
          `}
          viewBox="0 0 60 60"
        >
          <motion.path
            fill="none"
            strokeWidth="2"
            css={`
              stroke: ${StyledButtonColor};
            `}
            stroke="white"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            css={`
              stroke: ${StyledButtonColor};
            `}
            strokeWidth="2"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
        <StyledBlogBottomNav>
          {prev && (
            <Link to={prev.path}>
              <small>{prev.title}</small>
              <StyledButton>
                <FaChevronLeft /> Prev Post
              </StyledButton>
            </Link>
          )}
          {next && (
            <Link to={next.path}>
              <small>{next.title}</small>
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
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
        headerImage {
          childImageSharp {
            sizes(maxWidth: 2024) {
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
      body
    }
  }
`;
