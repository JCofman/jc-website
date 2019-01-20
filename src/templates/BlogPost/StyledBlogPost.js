import styled from 'styled-components';

export const StyledSingleBlogPostArticle = styled.article`
  .blog-post-header-image {
    display: grid;
    grid-column: 1 / -1;
  }

  .blog-post-content {
    display: grid;
    max-width: 1280px;
    margin: 5rem auto;
    grid-gap: 10px 50px;
    font-size: 2rem;
    grid-template-columns: 3fr 12fr 5fr;
    transition: color ${props => props.theme.themeTransition};
    a {
      color: ${props => props.theme.colors.primary};
    }
  }

  .blog-post-content > * {
    grid-column: 2 / -2;
    ${props => props.theme.small} {
      grid-column: 1 / -1;
    }
  }
  .blog-post-content h1,
  h2 {
    font-size: 8rem;
    font-style: italic;
    font-weight: 100;
    margin: 0;
    ${props => props.theme.small} {
      display: inline-block;
      font-size: 4rem;
    }
  }
  .blog-post-content pre {
    font-family: monospace;
  }

  .blog-post-content figure {
    grid-column: 1 / -1;
  }
  .blog-post-content figcaption {
    font-size: 1rem;
  }

  .blog-post-content > blockquote {
    grid-column: 1 / -1;
    font-style: italic;
    text-align: center;
    margin: 0;
    font-size: 6rem;
    ${props => props.theme.small} {
      font-size: 2rem;
    }
  }
  .blog-post-tip {
    background: #fafafafa;
    padding: 10px;
    grid-row: span 5;
    align-self: start;
  }

  .blog-post-tip-left {
    grid-column: 1 / span 1;
    text-align: right;
    border-right: 2px solid ${props => props.theme.colors.primary};
  }

  .blog-post-tip-right {
    grid-column: span 1 / 1;
    text-align: left;
    border-left: 2px solid ${props => props.theme.colors.primary};
  }
`;
