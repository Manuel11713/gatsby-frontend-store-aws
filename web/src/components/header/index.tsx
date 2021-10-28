import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useUser } from "providers";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthMenu } from "./AuthMenu";
import { Drawer } from "components/elements";

const Header = () => {
  const { user } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <StaticImage
                src="../../img/icon.png"
                alt="company logo"
                placeholder="blurred"
                layout="fixed"
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
            </Typography>
            {user ? (
              <AuthMenu />
            ) : (
              <Link to="/login">
                <Button
                  color="inherit"
                  size="large"
                  style={{ display: "inline-block", color: "#fff" }}
                >
                  Log In
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
};

export default Header;
