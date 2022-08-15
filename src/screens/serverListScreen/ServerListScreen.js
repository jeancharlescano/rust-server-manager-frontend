import React from "react";
import logo from "../../assets/img/rust-logo.jpg";
import { Link } from "react-router-dom";

const ServerListScreen = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
};

export default ServerListScreen;
