import React, { useState } from "react";
import editProfile from "../../requests/profile/editProfile";
import FormInput from "../atoms/form-input/FormInput";
import Alert from "../../requests/alert/Alert";
import Button from "../atoms/button/Button";
import formStyles from "./edit-profile-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";
import { UserAuth } from "../../contexts/AuthContext";

const EditProfileForm = () => {
  const { user } = UserAuth();

  const userIdToken = async () => {
    const getToken = await user.getIdToken().then((token) => {
      return token;
    });

    return getToken;
  };

  const initialState = {
    fields: {
      name: "",
      children: "",
      location: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  // trying to pass the userId to the editProfile req as below.
  // erroring with 403 bad request

  const userId = user.uid;
  console.log(userId);

  const handleEditProfile = (event) => {
    event.preventDefault();
    editProfile(fields, userId, userIdToken(), setAlert);
    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleEditProfile}>
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
              label="Edit Profile"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfileForm;
