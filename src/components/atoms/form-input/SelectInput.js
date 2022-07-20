/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
import inputStyles from "./form-input.module.css";
import Select from "react-select";

const MultiSelectInput = (props) => {
  return (
    <div className={inputStyles.field}>
      <label className={inputStyles.label} htmlFor={props.name}>
        {props.label}
        <Select
          className={props.className}
          id={props.name}
          options={props.options}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

// FormInput.propTypes = {
//   className: PropTypes.string,
//   name: PropTypes.string,
//   label: PropTypes.string,
//   type: PropTypes.string,
//   value: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func,
// }; */
// }

export default MultiSelectInput;
