import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Registration from "./components/Registration";

const App = () => {
  return (
    <>
      <div className="container">
      <div className="logo"></div>
        <h1 className="title">Registration form</h1>
        <h2 className="subtitle">Please, enter your details</h2>
        <Registration />

        <h3 className="metaText">
          Already have an account? <p className="link">Log in</p>
        </h3>
      </div>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
