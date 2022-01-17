/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Beautiful Bloom Alt, Beautiful Bloom, Noelan"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons"],
      },
    },
    "kute.js",
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
  ],
}
