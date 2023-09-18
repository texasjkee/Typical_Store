import { NavLink } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

import sprite from "../../../public/sprite.svg";

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <NavLink to={ROUTES.HOME}>
        <img src={LOGO} alt="Stuff" />
      </NavLink>

      <div className={styles.rights}>
        Developed by <a href="https://www.github.com/texasjkee">TexasJkee</a>
      </div>

      <div className={styles.socials}>
        <a href="https://www.github.com/texasjkee">TexasJkee</a>
        <svg className="icon">
          <use xlinkHref={`${sprite}#instagram`} />
        </svg>

        <svg className="icon">
          <use xlinkHref={`${sprite}#facebook`} />
        </svg>

        <svg className="icon">
          <use xlinkHref={`${sprite}#youtube`} />
        </svg>
      </div>
    </section>
  );
};

export default Footer;
