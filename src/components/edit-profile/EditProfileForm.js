import React, { useState, useEffect } from "react";
// need to import editProfile request once merged
import FormInput from "../atoms/form-input/FormInput";
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
  };

  const [fields, setFields] = useState(initialState.fields);

  useEffect(() => {
    setFields({ ...fields, ["userId"]: user.uid });
  }, []);

  const handleCreateEvent = (event) => {
    event.preventDefault();
    editProfile(fields);
    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
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
