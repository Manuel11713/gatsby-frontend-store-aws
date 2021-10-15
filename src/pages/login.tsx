import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm, SignUpForm } from "../components/inputs";

const Login = () => {
  const [showLogin, setShowLoign] = useState(false);

  return (
    <LoginStyles>{showLogin ? <LoginForm /> : <SignUpForm />}</LoginStyles>
  );
};

export default Login;

const LoginStyles = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  background: #ececec;
  padding: 50px;
`;
