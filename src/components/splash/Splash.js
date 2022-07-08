import React, { useState, useEffect } from "react";
import Subheading from "../atoms/subheading/Subheading";
import Title from "../atoms/title/Title";
import Image from "../../assets/images/swinging.svg";
import Button from "../atoms/button/Button";
import splash from "./splash.module.css";
import button from "../atoms/button/button.module.css";

const Splash = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 600);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const issmall = window.innerWidth < 600;
        if (issmall !== isSmall) setIsSmall(issmall);
      },
      false
    );
  }, [isSmall]);

  return (
    <>
      <div className={isSmall ? splash.smallScreen : splash.bigScreen}>
        <div className={splash.background}>
          <Title text="Playdate" />
          <Subheading />
          <img className={splash.img} src={Image} alt="girl on a swing" />
          <Button className={button.signIn} label="Sign In"></Button>
          <Button className={button.signUp} label="Sign Up"></Button>
        </div>
      </div>
    </>
  );
};

export default Splash;
