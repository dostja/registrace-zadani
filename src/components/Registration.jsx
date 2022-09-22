import React from "react";
import { useState, useRef, useEffect } from "react";
//import registrace from "/zadani/registrace.png";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    alert: " ",
    password: "",
    passwordConfirm: "",
  });

  const validityCheck = () => {
    const newName = user.email.split("@")[0];
    const filledForm = {
      username: user.username || newName,
      email: user.email,
      alert: user.alert,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
    };

    const emailValidity = filledForm.email.includes("@");

    const checkEmailValidity = () => {
      if (emailValidity === true) {
        console.log("Valid email");
      } else {
        console.log("Invalid email adress");
      }
    };

    const checkPasswordValidity = () => {
      if (filledForm.password === filledForm.passwordConfirm) {
        console.log("Password confirmed");
      } else {
        console.log("False password");
      }
    };

    checkEmailValidity();
    checkPasswordValidity();
  };

  const newRegistration = (e) => {
    setUser((prevState) => ({
      username: "",
      email: "",
      alert: " ",
      password: "",
      passwordConfirm: "",
    }));
  };

  validityCheck();

  const fillEmail = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      email: target.value,
    }));
  };

  const fillUserName = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      username: target.value,
    }));
  };

  const fillPassword = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      password: target.value,
    }));
  };

  const fillPasswordConfirm = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      passwordConfirm: target.value,
    }));
  };

  const inputRefEmail = useRef(null);
  const inputRefUserName = useRef(null);
  const inputRefPassword = useRef(null);
  const inputRefPasswordConfirm = useRef(null);

  const submitData = (event) => {
    console.log(
      "email: " +
        " " +
        inputRefEmail.current.value +
        ", " +
        "username: " +
        " " +
        inputRefUserName.current.value +
        ", " +
        "password: " +
        " " +
        inputRefPassword.current.value +
        ", " +
        "passwordConfirm: " +
        " " +
        inputRefPasswordConfirm.current.value
    );
    event.preventDefault();
  };

  return (
    <div className="Box">
      <div className="Form">
        <form onSubmit={newRegistration}>
          <div className="Form__title"></div>
          <div className="Form__body">
            <div className="Form__img"></div>
            <label className="Form_label"></label>
            <input
              ref={inputRefEmail}
              type="text"
              id="email"
              className="Form__input"
              placeholder="E-mail"
              value={user.email}
              onChange={fillEmail}
            />

            <label className="Form_label"></label>
            <input
              ref={inputRefUserName}
              type="text"
              id="name"
              className="Form__input"
              placeholder="User name"
              value={user.username}
              onChange={fillUserName}
            />

            <label className="Form_label"></label>
            <input
              ref={inputRefPassword}
              type="text"
              id="password"
              className="Form__input"
              placeholder="Password"
              value={user.password}
              onChange={fillPassword}
            />

            <label className="Form_label"></label>
            <input
              ref={inputRefPasswordConfirm}
              type="text"
              id="confirmation"
              className="Form__input"
              placeholder="Confirm password"
              value={user.passwordConfirm}
              onChange={fillPasswordConfirm}
            />
          </div>
          <div className="Form__button">
            <button onClick={submitData}>Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
