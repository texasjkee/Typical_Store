import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/user/userSlice";

import styles from "../../styles/Profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  // const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlerSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).some((val) => val);

    if (!isNotEmpty) return;

    dispatch(updateUser(values));
  };

  const currentUser = false;

  return (
    <div className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
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

          <div
            className={styles.link}
            onClick={() => toggleCurrentFormType("login")}
          >
            I already have an account
          </div>

          <button type="submit" className={styles.submit}>
            Create an account
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
