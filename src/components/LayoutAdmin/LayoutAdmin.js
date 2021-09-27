import React from "react";
import "./LayoutAdmin.css";
import MenuAdmin from "../MenuAdmin";

function LayoutAdmin({ children }) {
  return (
    <div className="main">
      <MenuAdmin />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default LayoutAdmin;
