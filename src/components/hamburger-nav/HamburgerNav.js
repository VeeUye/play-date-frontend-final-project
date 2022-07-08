import React from "react";
import "./hamburgernav.css";
import { stack as Menu } from "react-burger-menu";

const HamburgerNav = (props) => {
  return (
    // Pass on our props
    <Menu {...props} right>
      <a className="bm-item" href="/">
        My Profile
      </a>

      <a className="bm-item" href="/createevent">
        Create Event
      </a>

      <a className="bm-item" href="/my-events">
        My Events
      </a>

      <a className="bm-item" href="/signout">
        Sign Out
      </a>
    </Menu>
  );
};

export default HamburgerNav;
