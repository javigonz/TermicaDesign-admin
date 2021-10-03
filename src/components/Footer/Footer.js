import React, { useState } from "react";
import axios from "axios";
import "./Footer.css";

function Footer() {
  const [lastUpdate, useLastUpdate] = useState("");

  axios
    .get(
      `https://api.github.com/repos/javigonz/termicadesignadmin/commits?Fbuild.gradle&page=1&per_page=1`
    )
    .then((res) => {
      const date = new Date(res.data[0].commit.committer.date || "");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useLastUpdate(date.toUTCString());
    });

  return (
    <div className="main-footer">
      <div className="main-footer-info">Last deploy in AWS on {lastUpdate}</div>
    </div>
  );
}

export default Footer;
