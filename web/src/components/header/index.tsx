import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Button from "@mui/material/Button";
import { Link } from "gatsby";
import { useUser } from "providers";

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
        <Button variant="contained" size="large" onClick={() => logOut()}>
          Log out
        </Button>
      ) : (
        <Link to="/login">
          <Button
            variant="contained"
            size="large"
            style={{ display: "inline-block" }}
          >
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
