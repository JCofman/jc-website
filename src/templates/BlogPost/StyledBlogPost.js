import styled from "styled-components";

export const StyledSingleBlogPostArticle = styled.article`
  .blog-post-content {
    display: grid;
    max-width: 1000px;
    margin: 200px auto;
    grid-gap: 10px 50px;
    grid-template-columns: 3fr 12fr 5fr;
  }

  .blog-post-content > * {
    grid-column: 2 / -2;
  }

  .blog-post-content h1,
  h2 {
    font-size: 80px;
    font-style: italic;
    font-weight: 100;
    margin: 0;
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
  }
`;
