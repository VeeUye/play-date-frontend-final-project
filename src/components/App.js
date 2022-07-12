import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import HamburgerNav from "./hamburger-nav/HamburgerNav";
import "./hamburger-nav/hamburgernav.css";
import Splash from "./splash/Splash";
import SignUp from "./sign-up/SignUp";
import SignIn from "./sign-in/SignIn";
import PropTypes from "prop-types";
import MyEvents from "./myEvents/MyEvents";
import CreateEvent from "./create-event/CreateEvent";
import CreateProfile from "./create-profile/CreateProfile";
import "../styles/App.css";

function App({ events }) {
  return (
    <div>
      <div id={"App"}>
        <Router>
          <HamburgerNav
            className="burgernav"
            pageWrapId={"page-wrap"}
            outerContainerId={"App"}
          />
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/my-profile" />
              <Route exact path="/create-event" component={CreateEvent} />
              <Route exact path="/create-profile" component={CreateProfile} />
              <Route exact path="/my-events">
                <MyEvents events={events} />
              </Route>
              <Route exact path="/sign-out" />
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
      friendsInvited: PropTypes.arrayOf(PropTypes.number),
    })
  ),
};

export default App;
