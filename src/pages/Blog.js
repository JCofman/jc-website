import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import theme from 'styled-theming';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { Link as GatsbyLink } from 'gatsby';
import Heading from '../components/Heading';

import { usePosts } from '../hooks/usePosts';

const FontColor = theme(`mode`, {
  light: (props) => props.theme.colors.black,
  dark: (props) => props.theme.colors.white,
});

const StyledGrid = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;
  color: ${FontColor};
`;

const BlogPostBackgroundColor = theme(`mode`, {
  light: (props) => props.theme.colors.white,
  dark: (props) => props.theme.colors.black,
});

const StyledGradientBox = styled.div`
  box-sizing: border-box;
  margin: 1rem auto 2rem;
  padding: 0.5rem;
  width: 200%;
  max-width: 25rem;
  background: linear-gradient(${BlogPostBackgroundColor}, ${BlogPostBackgroundColor}),
    linear-gradient(to right, #3eecac, #4a90e2);
  border: 5px solid transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  border-radius: 1rem;
  border-width: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border: 6px solid ${BlogPostBackgroundColor};
    border-radius: 0.8rem;
  }
`;

const BlogArtikelImageWrapper = styled.div`
  min-width: 30rem;
  width: 30rem;
  flex-direction: row;
  margin: 0 auto;
`;

const StyledBlogPost = styled.div`
  max-width: 30rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background: ${BlogPostBackgroundColor};

  .post-container {
    padding: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  img {
    object-position: center;
    object-fit: cover;
    height: 12rem;
    width: 100%;
  }
`;

const MyBlog = () => {
  const { posts } = usePosts();
  return (
    <Layout>
      <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <div
        css={`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: ${(props) => props.theme.maxWidth};
          margin: 0 auto;
          padding-top: 15rem;
        `}
      >
        <StyledGradientBox>
          <span> {posts.length} posts </span>
        </StyledGradientBox>
        <StyledGrid>
          {posts.map((post) => {
            return (
              <StyledBlogPost key={post.title}>
                <GatsbyLink aria-label={`Go to ${post.slug}`} to={post.slug}>
                  <BlogArtikelImageWrapper>
                    <Img fluid={post.featuredImageSizes} />
                  </BlogArtikelImageWrapper>

                  <div
                    className="post-container"
                    css={`
                      padding: 1.5rem;
                    `}
                  >
                    <h3
                      css={`
                        letter-spacing: 0.1em;
                      `}
                    >
                      Tags
                    </h3>
                    <span>
                      {' '}
                      {post.tags != null &&
                        post.tags.map((tag, index, allTags) => {
                          if (allTags.length - 1 === index) {
                            return ` ${tag}`;
                          } else {
                            return ` ${tag},`;
                          }
                        })}
                    </span>
                    <Heading
                      css={`
                        color: ${FontColor};
                        font-size: 3rem;
                      `}
                      appearance="H3"
                    >
                      {post.title}
                    </Heading>

                    <p
                      css={`
                        margin-bottom: 0.75rem;
                      `}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      css={`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      `}
                    >
                      <Link aria-label={`Go to ${post.slu}`} to={post.slu}>
                        Read
                      </Link>
                    </div>
                  </div>
                </GatsbyLink>
              </StyledBlogPost>
            );
          })}
        </StyledGrid>
        <Link
          css={`
            margin-top: 12.8rem;
          `}
          to="/"
        >
          Back to homepage
        </Link>
      </div>
    </Layout>
  );
};

export default MyBlog;
