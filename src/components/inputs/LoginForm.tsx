import React from "react";
import { Typography, Form, Input, Button } from "antd";
const { Title } = Typography;
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { CustomCard } from "components/elements";
import { cognitoUserPool } from "utils";
import styled from "styled-components";

export const LoginForm = ({ setShowLoign }) => {
  const onFinish = (values) => {
    // const user = new CognitoUser({
    //   Username: values.name,
    //   Pool: cognitoUserPool,
    // });
    // const authDetails = new AuthenticationDetails({
    //   Username: values.name,
    //   Password: values.password,
    // });
    // user.authenticateUser(authDetails, {
    //   onSuccess: (session) => {
    //     console.log("onSuccess: ", session.getAccessToken().getJwtToken());
    //   },
    //   onFailure: (err) => {
    //     console.log("onFail: ", err);
    //   },
    //   newPasswordRequired: (data) => {
    //     console.log("new pass: ", data);
    //   },
    // });
  };
  return (
    <CustomCard>
      <FormStyles>
        <div>
          <Title className="center-text" level={2}>
            Sign In Form
          </Title>
        </div>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="name">
            <Input placeholder="Name or Email" />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>

        <small
          className="link-back"
          onClick={() => {
            setShowLoign(false);
          }}
        >
          Don't have an account yet?
        </small>
      </FormStyles>
    </CustomCard>
  );
};

const FormStyles = styled.div`
  .link-back {
    cursor: pointer;
    color: var(--primaryColor);
  }
`;
