import React from "react";
import PropTypes from "prop-types";
import styles from "./title.module.css";

const Title = (props) => {
  return <div className={styles.splash__title}>{props.text}</div>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
