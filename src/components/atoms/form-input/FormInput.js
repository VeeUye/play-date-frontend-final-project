import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ name, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default FormInput;
