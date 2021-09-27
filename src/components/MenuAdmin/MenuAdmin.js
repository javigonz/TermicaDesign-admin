/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MenuAdmin.css";

function MenuAdmin({ selected }) {
  return (
    <div className="main-menu_container">
      <div className="main-menu_logo">
        <a className="logoHighlight">Térmica</a>
        <a className="logoOverlight">Design</a>
      </div>
      <nav className="main-menu_nav">
        <div>
          connected as
          <br />
        </div>
        <div className="navHighlight"> javier.gonzalez@gmail.com</div>
      </nav>
    </div>
  );
}

export default MenuAdmin;
