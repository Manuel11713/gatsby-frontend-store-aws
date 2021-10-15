import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm, SignUpForm } from "components/Inputs";

const Login = () => {
  const [showLogin, setShowLoign] = useState(true);

  return (
    <LoginStyles>
      {showLogin ? (
        <LoginForm setShowLoign={setShowLoign} />
      ) : (
        <SignUpForm setShowLoign={setShowLoign} />
      )}
    </LoginStyles>
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
