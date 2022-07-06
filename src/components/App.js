import React from "react";
import "../styles/App.css";

import Splash from "./splash/Splash";
import "../styles/App.css";

import HamburgerNav from "./HamburgerNav/HamburgerNav";
import "./HamburgerNav/hamburgernav.css";



function App() {
  return (
    <>
      <div id={"App"}>
        <HamburgerNav className="burgernav" pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id={"page-wrap"}>
          <div className="wrapper">
            <Splash />
          </div>
        </div>
      </div><>
      </>
    </>
  );
}

export default App;
