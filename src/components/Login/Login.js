import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "../Account";

import "./Login.css";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate, logout, getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      onLoginSuccess(session, logout);
    });
  }, [getSession, logout, onLoginSuccess]);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        onLoginSuccess(data, logout);
      })
      .catch((err) => {
        console.error("Failed to login", err);
      });
  };

  return (
    <div className="window">
      <div className="content">
        <div className="welcome">Hello Again!!</div>
        <div className="subtitle">Login in TermicaDesign Admin</div>
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
              LogIn
            </button>
          </div>
        </form>
        <div className="subtitle">
          <a href="/signup">or SignIn another user</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
