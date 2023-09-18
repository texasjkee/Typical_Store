import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

import styles from "../../styles/Header.module.css";

import sprite from "../../../public/sprite.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME} />
        <img src={LOGO} alt="Stuff" />
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${sprite}#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search "
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>

          {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${sprite}#bag`} />
            </svg>
            <span className={styles.count}>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
