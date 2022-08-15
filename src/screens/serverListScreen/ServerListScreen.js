import React from "react";
import styles from "./ServerListScreen.module.scss";
import logo from "../../assets/img/rust-logo.jpg";
import { Link } from "react-router-dom";

const ServerListScreen = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link to="/">
          <img src={logo} className={styles.logoRust} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default ServerListScreen;
