import React from "react";
import styles from "./small-title.module.css";

const SmallTitle = (props) => {
  return <div className={styles[props.className]}>{props.text}</div>;
};

export default SmallTitle;
