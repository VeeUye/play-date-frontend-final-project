import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import HamburgerNav from "./hamburger-nav/HamburgerNav";
import "./hamburger-nav/hamburgernav.css";import Splash from "./splash/Splash";
import PropTypes from "prop-types";
import MyEvents from "./myEvents/MyEvents";
import CreateEventForm from "./create-event/CreateEventForm";
import "../styles/App.css";

function App({ events }) {
  return (
    <div>
      <div id={"App"}>
        <Router>
          <HamburgerNav className="burgernav" pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <div id={"page-wrap"}>
            <Switch>
            <div className="wrapper">
              <Route exact path="/" component={Splash} />
              <Route exact path="/my-profile" />
              <Route exact path="/create-event" component={CreateEventForm} />
              <Route exact path="/my-events">
                <MyEvents events={events}/>
              </Route>
              <Route exact path="/sign-out" />
            </div>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

App.propTypes = {
  events: PropTypes.arrayOf(
      PropTypes.shape({
          owner: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
          friendsInvited: PropTypes.arrayOf(PropTypes.number)
      })
  )
}

export default App;
