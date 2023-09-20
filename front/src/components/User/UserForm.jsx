import { useDispatch, useSelector } from "react-redux";
import { toggleForm, toggleFormType } from "../redux/user/userSlice";

import UserSignupForm from "./UserSignupForm";
import UserLoginForm from "./UserLoginForm";

import styles from "../../styles/User.module.css";
import { useState } from "react";

const UserForm = () => {
  // const { showForm } = useSelector(({ user }) => user);
  const { formType } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  // const closeForm = () => dispatch(toggleForm(false));

  //TODO: fix this.
  const [showForm, setShowForm] = useState(true);
  const closeForm = () => setShowForm(false);
  const toggleCurrentFormType = (type) => dispatch(toggleFormType);

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm}></div>
      {formType === "singup" ? (
        <UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
