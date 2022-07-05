import React from "react";

const Button = (props) => {
  const className = `${props.className}`;
  return <button className={className}>{props.label}</button>;
};

export default Button;
