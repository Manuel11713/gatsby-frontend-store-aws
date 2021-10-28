import React from "react";
import { SplitSection } from "components/sections";
import { Typography, Button } from "@mui/material";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HomePage = ({ data }) => {
  return (
    <div>
      <SplitSection
        leftNode={
          <>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Start trading with cyptos
            </Typography>
            <Typography variant="body2" mt={5}>
              This platform is the easiest place to buy, sell and borrow crypto
              assets. Sign up and get started today.
            </Typography>
            <div style={{ marginTop: 20 }}>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button variant="outlined">Get Started &#x2192;</Button>
              </Link>
            </div>
          </>
        }
        rightNode={
          <>
            <GatsbyImage
              image={data.cryptoCurrencies.childImageSharp.gatsbyImageData}
              alt="crypto currencies"
            />
          </>
        }
      />
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query {
    cryptoCurrencies: file(relativePath: { eq: "cryptocurrencies.jpg" }) {
      ...fullWidthImageFile
    }
  }
`;
