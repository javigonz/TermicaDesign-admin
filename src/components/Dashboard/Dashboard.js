import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "../Account";
import "./Dashboard.css";

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [session, setSession] = useState();

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
    });
  }, [getSession]);

  return (
    <div>
      <p>Dashboard content ...</p>
    </div>
  );
};
export default Dashboard;
