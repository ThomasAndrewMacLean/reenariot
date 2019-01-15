module.exports = {
  siteMetadata: {
    title: `Reena Riot`,
    description: `Site for new album of Reena Riot`,
    author: `thomas maclean`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reena riot`,
        short_name: `reena riot`,
        start_url: `/`,
        background_color: `#973d2f`,
        theme_color: `#973d2f`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://d19c0dd774494196a9147b7e0fb1a1b6@sentry.io/1371485',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: true, //) =>
        //  ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
  ],
}
