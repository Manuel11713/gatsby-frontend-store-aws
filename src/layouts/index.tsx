import React from "react";
import "antd/dist/antd.css";
import Header from "../components/header";

const MainLayout = ({ children, location }) => {
  return (
    <div>
      {!location.pathname.startsWith("/login") && <Header />}
      {children}
    </div>
  );
};

export default MainLayout;
