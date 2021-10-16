import React from "react";
import styled from "styled-components";

import { Button } from "antd";
import { Link } from "gatsby";
import { useUser } from "components/providers";

const Header = () => {
  const { user, logOut } = useUser();
  return (
    <Menu>
      <div>logo</div>
      {user ? (
        <Button type="primary" size="large" onClick={() => logOut()}>
          Log out
        </Button>
      ) : (
        <Link to="/login">
          <Button type="primary" size="large">
            Sign In
          </Button>
        </Link>
      )}
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
