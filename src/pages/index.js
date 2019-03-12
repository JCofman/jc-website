import { Link, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import theme from 'styled-theming';

import SEO from '../components/SEO';

import { zIndexbackGroundAfterElements } from '../components/Styles/zIndex';

import Layout from '../components/Layout';
import Home from './home';
import Divider from '../components/Divider';

const BlogArtikelWrapper = styled.div`
  background-color: ${props => props.theme.black};
  transition: color ${props => props.theme.themeTransition},
    background-color ${props => props.theme.themeTransition};
  min-height: 300px;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const BlogArtikel = styled.div`
  display: flex;
  margin: 2rem auto;
  flex-direction: column;

  ${props => props.theme.small} {
    flex-direction: column;
    width: 80%;
  }

  ${props => props.theme.large} {
    width: 60%;
    flex-direction: row;
  }

  ${props => props.theme.xlarge} {
    flex-direction: row;
  }
`;

export const BlogArtikelHeaderTextShadow = theme('mode', {
  light: '2px 2px 0 rgba(0,0, 0,0.3)',
  dark: '2px 2px 0 rgba(255,255, 255,0.3)',
});

export const BlogArtikelTextColor = theme('mode', {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const BaseArtikelHeader = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${BlogArtikelTextColor};
  transform: skew(-5deg) rotate(-1deg);
  color: ${BlogArtikelTextColor};
  text-shadow: ${BlogArtikelHeaderTextShadow};
  a {
    color: ${BlogArtikelTextColor};
    /* transition: color ${props => props.theme.themeTransition}; */ 
  }
  a:hover,
  a:hover {
    color: ${props => props.theme.colors.primary};
    transition: none;
  }
  ${props => props.theme.xsmall} {
    font-size: 3rem;
  }
  ${props => props.theme.small} {
    font-size: 5rem;
  }
  ${props => props.theme.medium} {
    font-size: 5rem;
  }
`;

export const StyledBlogArtikelHeaderTriangle = styled(BaseArtikelHeader)`
  :before {
    width: 0;
    height: 0;
    opacity: 0.2;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid ${props => props.theme.colors.white};
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: ${zIndexbackGroundAfterElements};
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
`;

export const StyledBlogArtikelHeaderCircle = styled(BaseArtikelHeader)`
  :before {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0.2;
    background-color: ${props => props.theme.colors.white};
    content: '';
    pointer-events: none;
    position: absolute;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
`;

export const StyledBlogArtikelHeaderParallelogram = styled(BaseArtikelHeader)`
  :before {
    width: 50px;
    height: 40px;
    background: ${props => props.theme.colors.white};
    opacity: 0.2;
    content: '';
    pointer-events: none;
    position: absolute;
    transform: translateX(-0.5em) translateY(-1.5rem) skew(20deg);
  }
`;

const BlogArtikelImageWrapper = styled.div`
  min-width: 200px;
  width: 250px;
  flex-direction: row;
  margin: 0 auto;

  ${props => props.theme.small} {
    margin: 0 auto;
  }
  ${props => props.theme.medium} {
    margin: 1rem 2rem;
  }
`;

const BlogArtikelSingleWrapper = styled.div`
  flex-direction: row;
  margin: 1rem 2rem;
  padding: 1rem;
`;

const BlogartikleSubInfo = styled.p`
  font-style: italic;
  font-size: 1.4rem;
`;

const BlogArtikelHeaderTime = styled.time`
  font-size: 2rem;
  color: ${BlogArtikelTextColor};
  transition: color ${props => props.theme.themeTransition};
  padding: 0.1rem 0.25rem;
  margin: 0.25rem 0;
`;

const BlogArtikelHeaderTags = styled.span`
  font-size: 1.5rem;
  padding: 0.1rem 0.25rem;
  margin: 0.25rem 0;
  transition: color ${props => props.theme.themeTransition};
  color: ${BlogArtikelTextColor};
`;

const StyledMain = styled.main`
  border-top: 1px solid #201c29;
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Home />
      <StyledMain>
        {edges.map(({ node: post }, index) => {
          const { frontmatter } = post;

          return (
            <BlogArtikelWrapper key={frontmatter.title}>
              <BlogArtikel>
                <BlogArtikelImageWrapper>
                  <Link to={frontmatter.path}>
                    <Img
                      sizes={frontmatter.featuredImage.childImageSharp.sizes}
                    />
                  </Link>
                </BlogArtikelImageWrapper>
                <BlogArtikelSingleWrapper>
                  {index === 0 && (
                    <StyledBlogArtikelHeaderTriangle>
                      <Link to={frontmatter.path}>{frontmatter.title}</Link>
                    </StyledBlogArtikelHeaderTriangle>
                  )}
                  {index === 1 && (
                    <StyledBlogArtikelHeaderCircle>
                      <Link to={frontmatter.path}>{frontmatter.title}</Link>
                    </StyledBlogArtikelHeaderCircle>
                  )}
                  {index === 2 && (
                    <StyledBlogArtikelHeaderParallelogram>
                      <Link to={frontmatter.path}>{frontmatter.title}</Link>
                    </StyledBlogArtikelHeaderParallelogram>
                  )}

                  <BlogartikleSubInfo>
                    <BlogArtikelHeaderTime>
                      {frontmatter.date}
                    </BlogArtikelHeaderTime>
                    <BlogArtikelHeaderTags>
                      {post.frontmatter.tags.map((tag, index, allTags) => {
                        if (allTags.length - 1 === index) {
                          return ` ${tag}`;
                        } else {
                          return ` ${tag},`;
                        }
                      })}
                    </BlogArtikelHeaderTags>{' '}
                  </BlogartikleSubInfo>

                  {frontmatter.excerpt}
                </BlogArtikelSingleWrapper>
              </BlogArtikel>
              <Divider />
            </BlogArtikelWrapper>
          );
        })}
      </StyledMain>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 250) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
