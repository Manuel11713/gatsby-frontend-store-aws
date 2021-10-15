import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: String(process.env.GATSBY_COGNITO_USER_POOL_ID),
  ClientId: String(process.env.GATSBY_COGNITO_CLIENT_ID),
};

export const cognitoUserPool = new CognitoUserPool(poolData);

export type LoginObject = {
  name: string;
  passwor: string;
  birthdate: any;
  address: string;
  email: string;
  gender: string;
  password: string;
};

export const parseUserAtributes = (values: LoginObject) => {
  const UserAtributes = Object.keys(values)
    .filter((key) => key !== "password")
    .map((key) => {
      const userAtributesData = {
        Name: key,
        Value:
          key == "birthdate" && values[key]
            ? values[key].format("L")
            : values[key],
      };
      return new CognitoUserAttribute(userAtributesData);
    });
  return UserAtributes;
};
