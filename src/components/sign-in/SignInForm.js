import React, { useState } from "react";
import FormInput from "../atoms/form-input/FormInput";
import screenSize from "../../functions/screenSize";
import Button from "../atoms/button/Button";
import formStyles from "./sign-in-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";

const SigninForm = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleCreateEvent = (event) => {
    event.preventDefault();
    console.log(fields);
    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const isSmall = screenSize();

  return (
    <>
      <form onSubmit={handleCreateEvent}>
        <div className={formStyles.signUpField1}>
          <div>
            <FormInput
              className={inputStyles.inputSignUp}
              label="email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.inputSignUp}
              label="Password"
              type="password"
              name="password"
              value={fields.password}
              onChange={handleFieldChange}
            />
            <div
              className={
                isSmall
                  ? formStyles.buttonWrapper
                  : formStyles.bigScreenButtonWrapper
              }
            >
              <Button
                className={buttonStyles.signUp2}
                type="submit"
                label="Sign Up"
              />
              <Button
                className={buttonStyles.signIn2}
                type="submit"
                label="Sign In"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
