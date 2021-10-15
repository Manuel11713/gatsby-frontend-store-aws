import React from "react";
import styled from "styled-components";
import { Typography, DatePicker, Form, Input, Button, Select } from "antd";
const { Title } = Typography;
const { Option } = Select;
import { parseUserAtributes, cognitoUserPool } from "../../utils";

export const SignUpForm = () => {
  const onFinish = (values: any) => {
    const UserAtributes = parseUserAtributes(values);
    cognitoUserPool.signUp(
      values.name,
      values.password,
      UserAtributes,
      UserAtributes,
      (err, data) => {
        if (err) return console.log(err);
        console.log(data);
      }
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
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

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const Card = styled.div`
  width: 40%;
  background: #fff;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid #ccc;
  .center-text {
    text-align: center;
  }
  .ant-picker {
    width: 100%;
  }
`;
