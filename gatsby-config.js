const { PUBLISH_ON_NOW } = process.env;

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const postQuery = `{
  posts: allMdx(
    filter: { fileAbsolutePath: { regex: "/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          path
          excerpt
          date(formatString: "MMM D, YYYY")
          tags
        }
      }
    }
  }
}`;
const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };
const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = {
  siteMetadata: {
    title: `Jacob Cofman Website`,
    description: `This is my website and blog`,
    author: `Jacob Cofman`,
    siteUrl: `https://jcofman.de`,
    social: {
      twitter: `jcofman`,
      github: `jcofman`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => PUBLISH_ON_NOW,
        env: {
          production: {
            policy: [{ userAgent: `*` }],
          },
          'branch-deploy': {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStaticFile: true,
        analyzerMode: `static`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-eslint`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jacob Cofman´s personal website`,
        short_name: `JCofman`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#50E3C2`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2024,
              withWebp: true,
              linkImagesToOriginal: false,
              markdownCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `300`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2024,
              withWebp: true,
              linkImagesToOriginal: false,
              markdownCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `300`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries: queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: 'https://89fb7db8e9c544918d2c03f506b66177@o493065.ingest.sentry.io/5561469',
        autoSessionTracking: true,
        sampleRate: 0.7,
      },
    },
  ],
};
