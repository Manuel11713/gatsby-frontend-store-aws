require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-ecommerce-aws",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [
          "Balance",
          "BalanceTransaction",
          "Product",
          "ApplicationFee",
          "Sku",
          "Subscription",
          "Price",
        ],

        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
  ],
};
