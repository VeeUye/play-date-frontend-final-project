import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";

import Splash from "./splash/Splash";
import "../styles/App.css";

import HamburgerNav from "./HamburgerNav/HamburgerNav";
import "./HamburgerNav/hamburgernav.css";



function App() {
  return (
    <div>
      <div id={"App"}>
        <Router>
          <HamburgerNav className="burgernav" pageWrapId={"page-wrap"} outerContainerId={"App"} />

          <div id={"page-wrap"}>
            <Switch>
            <div className="wrapper">
              <Route exact path="/" />
              <Route exact path="/my-profile" />
              <Route exact path="/create-event" />
              <Route exact path="/my-events" />
              <Route exact path="/sign-out" />
              <Splash />
            </div>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
