import React from "react";
import Title from "../atoms/Title";
import styles from "./splash.module.css";

const Splash = () => {
  return (
    <div className={styles.background}>
      <Title />
    </div>
  );
};

export default Splash;
