import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/user/userSlice";

import sprite from "../../../public/sprite.svg";

import styles from "../../styles/User.module.css";

const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    // avatar: "",
  });

  //TODO: check this.
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).some((val) => val);

    if (!isNotEmpty) return;
    console.log(values);
    dispatch(createUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </div>

      <div className={styles.title}>Sign Us</div>

      <form className={styles.form} onSubmit={handlerSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="name"
            placeholder="Your name"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className={styles.group}>
          <input
            type="avatar"
            placeholder="Your avatar"
            name="email"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div> */}

        <div className={styles.link} onClick={() => toggleCurrentFormType("login")}>
          I already have an account
        </div>

        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
