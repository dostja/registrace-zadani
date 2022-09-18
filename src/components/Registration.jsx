import React from "react";

const Registration = () => {
  





  return (
    <div className="Box">
      <div className="Form">
        <div className="Form__title"></div>
        <div className="Form__body">
          <div className="Form__img"></div>
          <div className="Form__email">
            <label className="Form_label"></label>
            <input
              type="text"
              id="email"
              className="Form__input"
              placeholder="E-mail"
            />
          </div>
          <div className="Form__name">
            <label className="Form_label"></label>
            <input
              type="text"
              id="name"
              className="Form__input"
              placeholder="User name"
            />
          </div>
          <div className="Form__password">
            <label className="Form_label"></label>
            <input
              type="text"
              id="password"
              className="Form__input"
              placeholder="Password"
            />
          </div>
          <div className="Form__confirmation">
            <label className="Form_label"></label>
            <input
              type="text"
              id="confirmation"
              className="Form__input"
              placeholder="Confirm password"
            />
          </div>
          <div className="Form__button"><button>Create account</button></div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
