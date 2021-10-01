import React, { useState } from "react";
import UserPool from "../../config/userPool";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error("SIGNUP KO --> ", err);
      }
    });
  };

  return (
    <div className="window">
      <div className="content">
        <div className="welcome">Register New User</div>
        <div className="subtitle">
          Create a new user into TermicaDesign Admin
        </div>
        <form onSubmit={onSubmit}>
          <div className="input-fields">
            <input
              placeholder="Email"
              className="input-line full-width"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="input-line full-width"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div className="center">
            <button type="submit" className="ghost-round middle-width">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
