import React from "react";
import screenSize from "../../../functions/screenSize";
import PropTypes from "prop-types";
import styles from "./title.module.css";

const Title = (props) => {
  const isSmall = screenSize();
  return (
    <div className={isSmall ? styles.splash__title : styles.splash__bigTitle}>
      {props.text}
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
