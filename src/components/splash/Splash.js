import React from "react";
import Subheading from "../atoms/subheading/Subheading";
import Title from "../atoms/title/Title";
import Image from "../../assets/swinging.svg";
import Button from "../atoms/button/Button";
import styles from "./splash.module.css";

const Splash = () => {
  return (
    <div className={styles.background}>
      <Title />
      <Subheading />
      <img src={Image} alt="girl on a swing" />
      <Button className={styles.signIn} label="Sign In"></Button>
      <Button className={styles.signUp} label="Sign Up"></Button>
    </div>
  );
};

export default Splash;
