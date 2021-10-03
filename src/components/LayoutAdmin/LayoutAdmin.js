import React from "react";
import "./LayoutAdmin.css";
import MenuAdmin from "../MenuAdmin";
import Footer from "../Footer";

function LayoutAdmin({ children, session }) {
  return (
    <div className="main">
      <MenuAdmin session={session} />
      <div className="main-content">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default LayoutAdmin;
