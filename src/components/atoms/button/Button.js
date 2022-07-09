import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const className = `${props.className}`;
  const onClick = props.onClick;
  return (
    <button className={className} onClick={onClick}>
      {props.label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
