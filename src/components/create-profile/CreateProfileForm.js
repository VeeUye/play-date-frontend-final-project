import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import postProfile from "../../requests/profile/postProfile";
import PropTypes from "prop-types";
import FormInput from "../atoms/form-input/FormInput";
import Alert from "../../requests/alert/Alert";
import Button from "../atoms/button/Button";
import formStyles from "./create-profile-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";
// import { UserAuth } from "../../contexts/AuthContext";

const CreateProfileForm = ({ imgUrl, user, token }) => {
  // const { user, token } = UserAuth();

  const history = useHistory();

  const initialState = {
    fields: {
      name: "",
      children: "",
      location: "",
      userId: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);

  const [fields, setFields] = useState(initialState.fields);

  useEffect(() => {
    setFields({ ...fields, ["userId"]: user.uid });
  }, []);

  const handleCreateEvent = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    postProfile(fields, token, setAlert);
    setFields(initialState.fields);
    history.push("/my-profile");
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
      ["imgUrl"]: imgUrl,
    });
  };

  return (
    <>
      <form onSubmit={handleCreateEvent}>
        <div className={formStyles.field1}>
          <div>
            <FormInput
              className={inputStyles.input}
              label="Your Name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Child's Name"
              type="text"
              name="children"
              value={fields.children}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Location"
              type="text"
              name="location"
              value={fields.location}
              onChange={handleFieldChange}
            />
            <Alert message={alert.message} success={alert.isSuccess} />
            <Button
              className={buttonStyles.createEvent}
              type="submit"
              label="Create Profile"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProfileForm;

CreateProfileForm.propTypes = {
  imgUrl: PropTypes.string,
  user: PropTypes.object,
  token: PropTypes.string,
};
