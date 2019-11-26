/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString: "postgres:///app_db",
        schema: "public",
        refetchInterval: 60, // Refetch data every 60 seconds
      },
    },
  ]
}
