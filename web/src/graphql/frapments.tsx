import { graphql } from "gatsby";

export const fullWidthImageFile = graphql`
  fragment fullWidthImageFile on File {
    childImageSharp {
      gatsbyImageData(formats: [PNG, WEBP], placeholder: BLURRED)
    }
  }
`;
