import React from "react";
import styles from "./HeaderComponent.module.scss";
import logo from "../../assets/img/rust-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} className={styles.logoRust} alt="logo" />
        </Link>
      </div>
      <div className={styles.addBtnContainer}>
        <Link to="/newserver">
          <FontAwesomeIcon icon={faPlus} color="white" size="2x" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
