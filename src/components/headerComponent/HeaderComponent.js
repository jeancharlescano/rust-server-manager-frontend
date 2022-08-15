import React from "react";
import styles from "./HeaderComponent.module.scss";
import logo from "../../assets/img/rust-logo.jpg";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} className={styles.logoRust} alt="logo" />
      </Link>
    </div>
  );
};

export default HeaderComponent;
