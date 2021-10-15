import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: String(process.env.GATSBY_COGNITO_USER_POOL_ID),
  ClientId: String(process.env.GATSBY_COGNITO_CLIENT_ID),
};

export const cognitoUserPool = new CognitoUserPool(poolData);

export const parseUserAtributes = (values) => {
  const UserAtributes = Object.keys(values)
    .filter((key) => key !== "password")
    .map((key) => {
      const userAtributesData = {
        Name: key,
        Value: key == "birthdate" ? values[key].format("L") : values[key],
      };
      return new CognitoUserAttribute(userAtributesData);
    });
  return UserAtributes;
};
