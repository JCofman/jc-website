import styled from 'styled-components';
import { darken } from 'polished';
export const StyledSingleBlogPostArticle = styled.article`
  .blog-post-header-image {
    display: grid;
    grid-column: 1 / -1;
  }

  .blog-post-content {
    display: grid;
    max-width: 54em; /* not more then 75 characters in one line */
    margin: 5rem auto;
    grid-gap: 10px 50px;
    word-break: break-word;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.6;
    grid-template-columns: 3fr 12fr 3fr;
    transition: color ${props => props.theme.themeTransition};
    a {
      color: ${props => props.theme.colors.primary && darken(0.1, props.theme.colors.primary)};
      position: relative;
      transition: color 0.4s ease-out;
    }
    a:hover,
    a:focus {
      color: ${props => props.theme.colors.primary};
    }
    a::after {
      border-radius: 1em;
      border-top: 0.1em solid ${props => props.theme.colors.primary && darken(0.5, props.theme.colors.primary)};
      position: absolute;
      content: '';
      right: 100%;
      left: 0;
      bottom: 0.01em;
      transition: right 0.4s cubic-bezier(0, 0.5, 0, 1), border-color 0.4s ease-out;
    }
    a:hover::after,
    a:focus::after {
      right: 0;
      border-color: ${props => props.theme.colors.primary};
    }
    a:visited,
    a:visited::after {
      color: ${props => props.theme.colors.secondary};
      border-color: ${props => props.theme.colors.secondary};
    }
  }

  .blog-post-content > * {
    grid-column: 1 / -1;
    margin: 2rem;
    ${props => props.theme.small} {
      grid-column: 2 / -2;
      margin: 0;
    }
  }
  .blog-post-content h1,
  h2 {
    font-size: 4rem;
    font-style: italic;
    font-weight: 100;
    margin: 0;
    ${props => props.theme.small} {
      display: inline-block;
      font-size: 8rem;
    }
  }

  .blog-post-content p {
    margin-bottom: 2rem;
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
    font-style: italic;
    text-align: center;
    margin: 0;
    font-size: 3rem;

    ${props => props.theme.small} {
      font-size: 6rem;
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
