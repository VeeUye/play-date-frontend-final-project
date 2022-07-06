import React from "react";
import styles from "./title.module.css";

const Title = (props) => {
  return <div className={styles.splash__title}>{props.text}</div>;
};

export default Title;
