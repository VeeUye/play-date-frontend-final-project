import React from "react";
import Subheading from "../atoms/subheading/Subheading";
import Title from "../atoms/title/Title";
import Image from "../../assets/swinging.svg";
import styles from "./splash.module.css";

const Splash = () => {
  return (
    <div className={styles.background}>
      <Title />
      <Subheading />
      <img src={Image} alt="girl on a swing" />
    </div>
  );
};

export default Splash;
