import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin";
import NotFound from "./components/NotFound";
import LayoutAdmin from "./components/LayoutAdmin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props) => (
            <LayoutAdmin>
              <Admin {...props}> </Admin>
            </LayoutAdmin>
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
