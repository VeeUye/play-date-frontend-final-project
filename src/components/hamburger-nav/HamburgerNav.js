import React from "react";
import "./hamburgernav.css";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";

const HamburgerNav = (props) => {
  const { logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    // Pass on our props
    <Menu {...props} right>
      <Link id="home" className="bm-item" to="/my-profile">
        My Profile
      </Link>
      <Link id="create-event" className="bm-item" to="/create-event">
        Create Event
      </Link>
      <Link id="my-events" className="bm-item" to="/my-events">
        My Events
      </Link>
      <Link id="sign-out" className="bm-item" onClick={handleLogout} to="/">
        Sign Out
      </Link>
    </Menu>
  );
};

export default HamburgerNav;
