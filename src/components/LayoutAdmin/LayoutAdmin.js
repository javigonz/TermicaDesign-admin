import React from "react";
import "./LayoutAdmin.css";
import MenuAdmin from "../MenuAdmin";

function LayoutAdmin({ children, session }) {
  return (
    <div className="main">
      <MenuAdmin session={session} />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default LayoutAdmin;
