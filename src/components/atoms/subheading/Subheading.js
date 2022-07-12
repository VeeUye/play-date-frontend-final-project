import React from "react";
import screenSize from "../../../functions/screenSize";
import styles from "./subheading.module.css";

const Subheading = () => {
  const isSmall = screenSize();
  return (
    <div className={isSmall ? styles.text : styles.bigScreenText}>
      Scheduler for parents
    </div>
  );
};

export default Subheading;
