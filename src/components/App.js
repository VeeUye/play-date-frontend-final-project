import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import "../styles/App.css";
import HamburgerNav from "./hamburger-nav/HamburgerNav";
import "./hamburger-nav/hamburgernav.css";
import Splash from "./splash/Splash";
import SignUp from "./sign-up/SignUp";
import SignIn from "./sign-in/SignIn";
import PropTypes from "prop-types";
import MyProfile from "./my-profile/MyProfile";
import MyEvents from "./myEvents/MyEvents";
import CreateEvent from "./create-event/CreateEvent";
import CreateProfile from "./create-profile/CreateProfile";
import "../styles/App.css";
import ProtectedRoute from "./protected-routes/ProtectedRoutes";

function App({ events }) {
  const { user } = UserAuth();

  return (
    <div>
      <div id={"App"}>
        <Router>
          {user && (
            <HamburgerNav
              className="burgernav"
              pageWrapId={"page-wrap"}
              outerContainerId={"App"}
            />
          )}
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/my-profile">
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              </Route>
              <Route exact path="/create-event">
                <ProtectedRoute>
                  <CreateEvent />
                </ProtectedRoute>
              </Route>
              <Route exact path="/create-profile">
                <ProtectedRoute>
                  <CreateProfile />
                </ProtectedRoute>
              </Route>
              <Route exact path="/my-events">
                <ProtectedRoute>
                  <MyEvents events={events} />
                </ProtectedRoute>
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
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
      friendsInvited: PropTypes.arrayOf(PropTypes.number),
    })
  ),
};

export default App;
