import React from "react";
import styled from "styled-components";
import { Typography, DatePicker, Form, Input, Button, Select } from "antd";
import { CustomCard } from "components/elements";
const { Title } = Typography;
const { Option } = Select;
import { ISignUpObject } from "utils";
import { useUser } from "components/providers";

export const SignUpForm = ({ setShowLoign }) => {
  const { signUp } = useUser();

  const onFinish = (values: ISignUpObject) => signUp(values);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <CustomCard>
      <FormStyles>
        <div>
          <Title className="center-text" level={2}>
            Sign Up Form
          </Title>
        </div>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name="name">
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item name="birthdate">
            <DatePicker format="YYYY/MM/DD" />
          </Form.Item>

          <Form.Item name="email">
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="gender">
            <Select placeholder="Gender">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          <Form.Item name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="address">
            <Input placeholder="Address" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <small
            className="link-back"
            onClick={() => {
              setShowLoign(true);
            }}
          >
            Already have an account ?
          </small>
        </Form>
      </FormStyles>
    </CustomCard>
  );
};

const FormStyles = styled.div`
  .ant-picker {
    width: 100%;
  }
  .link-back {
    cursor: pointer;
    color: var(--primaryColor);
  }
`;
