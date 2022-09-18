import React from "react";
import { useState } from "react";
//import registrace from "/zadani/registrace.png";

const Registration = () => {{
  
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      });

     const fillForm = ({enter}) => {
        console.log(enter);
if (enter === "@") {
    setUser((user) => ({
        ...user,  username: '',
        email: '@',
        password: '',
        passwordConfirm: '',})
   ) }
}

     }


        



      

  return (
    <div className="Box">
      <div className="Form">
        <div className="Form__title"></div>
        <div className="Form__body">
          <div className="Form__img"></div>
            <label className="Form_label"></label>
            <input
              type="text"
              id="email"
              className="Form__input"
              placeholder="E-mail"
              value={email}
            />
          </div>
          <div className="Form__name">
            <label className="Form_label"></label>
            <input
              type="text"
              id="name"
              className="Form__input"
              placeholder="User name"
              value={username}
            />
          </div>
          <div className="Form__password">
            <label className="Form_label"></label>
            <input
              type="text"
              id="password"
              className="Form__input"
              placeholder="Password"
              value={password}
            />
          </div>
          <div className="Form__confirmation">
            <label className="Form_label"></label>
            <input
              type="text"
              id="confirmation"
              className="Form__input"
              placeholder="Confirm password"
              value={passwordConfirm}
            />
          </div>
          <div className="Form__button"><button>Create account</button></div>
        </div>
      </div>
   
  );
};

export default Registration;
