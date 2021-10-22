import React from "react";
import Header from "components/header";
import "styles/index.css";
import { GlobalProvider } from "providers";

const MainLayout = ({ children, location }) => {
  return (
    <GlobalProvider>
      {!location.pathname.startsWith("/login") && <Header />}
      {children}
    </GlobalProvider>
  );
};

export default MainLayout;
