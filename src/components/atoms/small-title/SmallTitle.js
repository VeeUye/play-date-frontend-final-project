import React from "react";
import PropTypes from "prop-types";

const SmallTitle = (props) => {
  return <div className={props.className}>{props.text}</div>;
};

SmallTitle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default SmallTitle;
