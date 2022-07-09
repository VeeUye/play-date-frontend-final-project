import React from "react";
import PropTypes from "prop-types";
import inputStyles from "./form-input.module.css";

const FormInput = (props) => {
  return (
    <div className={inputStyles.field}>
      <label className={inputStyles.label} htmlFor={props.name}>
        {props.label}
        <input
          className={props.className}
          id={props.name}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

FormInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormInput;
