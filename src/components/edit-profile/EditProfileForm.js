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

  const initialState = {
    fields: {
      name: "",
      childName: "",
      location: "",
      userId: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  // useEffect(() => {
  //   setFields({ ...fields, ["userId"]: user.uid });
  // }, []);

  const handleEditProfile = (event) => {
    event.preventDefault();
    console.log(fields);
    console.log(fields.userId);
    editProfile(fields, user.uid, setAlert);
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
              name="childName"
              value={fields.childName}
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
