import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Header.module.css";

import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} />
      </div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
