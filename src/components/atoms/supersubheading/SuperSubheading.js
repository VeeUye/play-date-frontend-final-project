import React from "react";
import PropTypes from "prop-types";

const SuperSubheading = (props) => {
  return <div className={props.className}>{props.text}</div>;
};

SuperSubheading.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default SuperSubheading;
