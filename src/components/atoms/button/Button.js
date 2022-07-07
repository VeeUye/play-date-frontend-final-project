import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const className = `${props.className}`;
  return <button className={className}>{props.label}</button>;
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
