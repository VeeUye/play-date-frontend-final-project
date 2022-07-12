import React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  const className = props.className;
  return <div className={className}>{props.text}</div>;
};

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
