import React from "react";
import Subheading from "../atoms/subheading/Subheading";
import Title from "../atoms/title/Title";
import Image from "../../assets/images/swinging.svg";
import Button from "../atoms/button/Button";
import CreateEvent from "../create-event/CreateEvent";
import splash from "./splash.module.css";
import button from "../atoms/button/button.module.css";

const Splash = () => {
  return (
    <>
      <div className={splash.background}>
        <Title text="Playdate" />
        <Subheading />
        <img src={Image} alt="girl on a swing" />
        <Button className={button.signIn} label="Sign In"></Button>
        <Button className={button.signUp} label="Sign Up"></Button>
      </div>
      <div className={splash.background}>
        <CreateEvent />
      </div>
    </>
  );
};

export default Splash;
