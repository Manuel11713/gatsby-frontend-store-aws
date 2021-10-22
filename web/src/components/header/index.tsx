import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "antd";
import { Link } from "gatsby";
import { useUser } from "components/providers";

const Header = () => {
  const { user, logOut } = useUser();

  return (
    <Menu>
      <Link to="/">
        <StaticImage
          src="../../images/icon.png"
          alt="company "
          placeholder="blurred"
          layout="fixed"
          width={50}
          height={50}
        />
      </Link>
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
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
`;