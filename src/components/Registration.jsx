import React from "react";
import { useState, useRef } from "react";
import "./style.css";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    alert: " ",
    password: "",
    passwordConfirm: "",
    emailCorrect: " ",
  });
  const newName = user.email.split("@")[0];
  const validityCheck = () => {
    const filledForm = {
      username: user.username || newName,
      email: user.email,
      alert: user.alert,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
      emailCorrect: user.emailCorrect,
    };
    console.log(newName);
    const emailValidity = filledForm.email.includes("@");

    const checkEmailValidity = () => {
      if (emailValidity === true) {
        console.log("Valid email");
        (user.emailCorrect = "E-mail confirmed"), (user.name = newName);
      } else {
        console.log("Invalid email adress");
        user.emailCorrect = "Please, enter your valid e-mail adress";
      }
    };

    const passwordLength = filledForm.password.length >= 1;

    const checkPasswordValidity = () => {
      if (
        (passwordLength && filledForm.password) === filledForm.passwordConfirm
      ) {
        console.log("Password confirmed");
        user.alert = "Password confirmed";
      } else {
        console.log("False password");
        user.alert = "Please, confirm your password";
      }
    };

    checkEmailValidity();
    checkPasswordValidity();
  };

  const newRegistration = (event) => {
    event.preventDefault();
    setUser((prevState) => ({
      ...prevState,
      username: "",
      email: "",
      alert: " ",
      password: "",
      passwordConfirm: "",
    }));
    //prevState.preventDefault();
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
          <div className="body">
            <div className="description">
              <div className="part">
                <label className="label">E-mail</label>
                <input
                  ref={inputRefEmail}
                  type="text"
                  id="email"
                  className="Form__input"
                  placeholder="E-mail"
                  value={user.email}
                  onChange={fillEmail}
                />
              </div>
              <div className="emailCorrect" id="emailCorrect">
                {user.emailCorrect}
              </div>
            </div>
            <div className="part">
              <label className="label">User name</label>
              <input
                ref={inputRefUserName}
                type="text"
                id="name"
                className="Form__input"
                placeholder="User name"
                value={newName}
                onChange={fillUserName}
              />{" "}
            </div>
            <div className="part">
              <label className="label">Password</label>
              <input
                ref={inputRefPassword}
                type="text"
                id="password"
                className="Form__input"
                placeholder="Password"
                value={user.password}
                onChange={fillPassword}
              />
            </div>
            <div className="description">
              <div className="part">
                <label className="label">Confirm password</label>
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
              <div className="passwordCorrect" id="passwordCorrect">
                {user.alert}
              </div>
            </div>
          </div>
         
            <button onClick={submitData} className="button">Create account</button>
        
        </form>
      </div>
    </div>
  );
};

export default Registration;
