const { PUBLISH_ON_NOW } = process.env;

module.exports = {
  siteMetadata: {
    title: `Jacob Cofman Website`,
    description: `This is my website and blog`,
    author: `Jacob Cofman`,
    siteUrl: `https://jcofman.de`,
    social: {
      twitter: `jcofman`,
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
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        analyzerPort: 3000,
        production: true,
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
    `gatsby-plugin-offline`,
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-134206784-1`,
      },
    },
    `gatsby-transformer-json`,
  ],
};
