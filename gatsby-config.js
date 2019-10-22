/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString: "postgresql://localhost/app_db",
        schema: "myschema",
      }
    }
  ]
}
