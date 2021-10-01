import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import LayoutAdmin from "./components/LayoutAdmin";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { Account } from "./components/Account";

function App() {
  const [session, setSession] = useState();

  const handlerOnLoginSuccess = (session, logout) => {
    setSession({ session, logout });
  };

  console.log("PROCESS --> ", process.env);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props) => (
            <Account>
              <LayoutAdmin session={session}>
                {!session ? (
                  <Login
                    {...props}
                    onLoginSuccess={handlerOnLoginSuccess}
                  ></Login>
                ) : (
                  <Dashboard></Dashboard>
                )}
              </LayoutAdmin>
            </Account>
          )}
        />
        <Route
          path="/signup"
          exact={true}
          render={(props) => (
            <Account>
              <LayoutAdmin session={session}>
                <Signup {...props}> </Signup>
              </LayoutAdmin>
            </Account>
          )}
        />
        <Route
          render={(props) => (
            <LayoutAdmin>
              <NotFound {...props}> </NotFound>
            </LayoutAdmin>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
