import React from "react";
import PropTypes from "prop-types";
import alertStyles from "../alert/alert.module.css";

const Alert = ({ message, success }) => {
  if (!message) return null;
  return (
    <div
      className={`${alertStyles.alert} ${
        success ? alertStyles.success : alertStyles.error
      }`}
    >
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
