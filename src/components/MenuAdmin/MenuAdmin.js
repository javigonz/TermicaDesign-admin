/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MenuAdmin.css";

function MenuAdmin({ session = {} }) {
  const { session: sessionInfo, logout } = session;
  const userInfo =
    (sessionInfo &&
      sessionInfo.idToken &&
      sessionInfo.idToken.payload &&
      sessionInfo.idToken.payload.email) ||
    "";

  const handlerOnLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div className="main-menu_container">
      <div className="main-menu_logo">
        <a className="logoHighlight">Térmica</a>
        <a className="logoOverlight">Design</a>
      </div>
      <nav className="main-menu_nav">
        {userInfo && <button onClick={handlerOnLogout}>Logout</button>}
        <div>
          Login as
          <br />
        </div>
        <div className="navHighlight"> {userInfo}</div>
      </nav>
    </div>
  );
}

export default MenuAdmin;
