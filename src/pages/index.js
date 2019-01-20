import { Link, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import theme from 'styled-theming';

import Layout from '../components/Layout';
import Home from './home/';
import Divider from '../components/Divider';

const BlogArtikelWrapper = styled.div`
  background-color: ${props => props.theme.black};
  transition: color ${props => props.theme.themeTransition},
    background-color ${props => props.theme.themeTransition};
  min-height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const BlogArtikel = styled.div`
  display: flex;
  width: 60%;
  margin: 2rem auto;

  ${props => props.theme.small} {
    flex-direction: column;
    width: 80%;
  }
  ${props => props.theme.medium} {
    flex-direction: column;
  }
  ${props => props.theme.large} {
    flex-direction: row;
  }
  ${props => props.theme.xlarge} {
    flex-direction: row;
  }
`;

const BlogArtikelHeaderTextShadow = theme('mode', {
  light: '2px 2px 0 rgba(0,0, 0,0.3)',
  dark: '2px 2px 0 rgba(255,255, 255,0.3)',
});

const BlogArtikelTextColor = theme('mode', {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const BlogArtikelHeader = styled.h2`
  font-size: 5rem;
  transform: skew(-5deg) rotate(-1deg);
  margin-bottom: 2rem;
  color: ${BlogArtikelTextColor};
  text-shadow: ${BlogArtikelHeaderTextShadow};

  a {
    color: ${BlogArtikelTextColor};
    transition: color ${props => props.theme.themeTransition};
  }
  a:hover {
    color: ${props => props.theme.colors.primary};
    transition: none;
  }
  a:before {
    width: 0;
    height: 0;
    opacity: 0.2;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid ${props => props.theme.colors.white};
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: -1;
    transform: translateX(-0.5em) translateY(-1.5rem);
  }
`;

const BlogArtikelImageWrapper = styled.div`
  margin: 1rem 1rem;
  min-width: 200px;
  width: 250px;
  flex-direction: row;
`;

const BlogArtikelSingleWrapper = styled.div`
  flex-direction: row;
  margin: 1rem;
  padding: 1rem;
`;

const BlogArtikelHeaderTime = styled.time`
  font-size: 1.8rem;
  color: ${BlogArtikelTextColor};
  transition: color ${props => props.theme.themeTransition};
  padding: 0.1rem 0.25rem;
  margin: 0.25rem 0;
`;

const BlogArtikelHeaderTags = styled.span`
  font-size: 1.8rem;
  padding: 0.1rem 0.25rem;
  margin: 0.25rem 0;
  transition: color ${props => props.theme.themeTransition};
  color: ${BlogArtikelTextColor};
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
                  <BlogArtikelHeader>
                    <Link to={frontmatter.path}>{frontmatter.title}</Link>
                  </BlogArtikelHeader>
                  <p>
                    <BlogArtikelHeaderTime>
                      {frontmatter.date}
                    </BlogArtikelHeaderTime>
                    <BlogArtikelHeaderTags>
                      {frontmatter.tags.map(tag => ` ${tag}`)}
                    </BlogArtikelHeaderTags>{' '}
                  </p>

                  {frontmatter.excerpt}
                </BlogArtikelSingleWrapper>
              </BlogArtikel>
              <Divider />
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
