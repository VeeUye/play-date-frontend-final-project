import React, { useState } from "react";
import FormInput from "../atoms/form-input/FormInput";
import Button from "../atoms/button/Button";
import formStyles from "./create-profile-form.module.css";
import buttonStyles from "../atoms/button/button.module.css";

const CreateEventForm = () => {
  const initialState = {
    fields: {
      name: "test name",
      childName: "",
      Location: "",
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

  return (
    <>
      <form onSubmit={handleCreateEvent}>
        <div className={formStyles.field1}>
          <div>
            <FormInput
              label="Your Name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />

            <FormInput
              label="Child's Name"
              type="text"
              name="Child's Name"
              value={fields.date}
              onChange={handleFieldChange}
            />

            <FormInput
              label="Location"
              type="text"
              name="location"
              value={fields.location}
              onChange={handleFieldChange}
            />

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

export default CreateEventForm;
