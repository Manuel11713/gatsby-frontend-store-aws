import React from "react";
import styled from "styled-components";

export const CustomCard = ({ children }) => {
  return <CardStyles>{children}</CardStyles>;
};

const CardStyles = styled.div`
  width: 40%;
  background: #fff;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid #ccc;
  .center-text {
    text-align: center;
  }
`;
