import React from "react";
import { Typography, Form, Input, Button } from "antd";
const { Title } = Typography;
import { CustomCard } from "components/elements";
import styled from "styled-components";
import { useUser } from "components/providers";
import { ILogInObject } from "utils";

export const LoginForm = ({ setShowLoign }) => {
  const { login } = useUser();
  const onFinish = (values: ILogInObject) => login(values);
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
