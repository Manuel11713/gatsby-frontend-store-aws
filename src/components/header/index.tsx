import React from "react";
import styled from "styled-components";

import { Button } from "antd";
import { Link } from "gatsby";

const Header = () => {
  return (
    <Menu>
      <div>logo</div>
      <Link to="/login">
        <Button type="primary" size="large">
          Sign In
        </Button>
      </Link>
    </Menu>
  );
};

export default Header;

const Menu = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
`;
