import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="window">
      <div className="content">
        <div className="welcome">Hello Again!!</div>
        <div className="subtitle">
          This is the Admin Console for TermicaDesign
        </div>
        <div className="input-fields">
          <input
            type="email"
            placeholder="Email"
            className="input-line full-width"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="input-line full-width"
          ></input>
        </div>
        <div>
          <button className="ghost-round middle-width">LogIn</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
