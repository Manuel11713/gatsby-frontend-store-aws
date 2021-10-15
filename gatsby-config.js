require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-cognito",
  },
  plugins: [`gatsby-plugin-typescript`, `gatsby-plugin-layout`],
};
