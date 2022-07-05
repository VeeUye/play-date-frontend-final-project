import React from "react";
import Subheading from "../atoms/subheading/Subheading";
import Title from "../atoms/title/Title";
import styles from "./splash.module.css";

const Splash = () => {
  return (
    <div className={styles.background}>
      <Title />
      <Subheading />
    </div>
  );
};

export default Splash;
