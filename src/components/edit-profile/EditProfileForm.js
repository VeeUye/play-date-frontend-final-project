import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
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
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState([]);

  const [alert, setAlert] = useState(initialState.alert);

  const handleEditProfile = (event) => {
    const userId = user.uid;
    event.preventDefault();
    editProfile(fields, userId, userIdToken(), setAlert);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleClick = () => {};

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
              onClick={handleClick}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfileForm;
