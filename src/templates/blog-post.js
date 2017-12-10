import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

// import '../css/blog-post.css';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>

      {prev && (
        <Link to={prev.frontmatter.path}>
          Previous: {prev.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.frontmatter.path}>Next: {next.frontmatter.title}</Link>
      )}
    </div>
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
      }
    }
  }
`;
