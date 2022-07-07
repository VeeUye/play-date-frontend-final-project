import React, { useState } from "react";
import FormInput from "../atoms/form-input/FormInput";
import Button from "../atoms/button/Button";
import formStyles from "./create-event-form.module.css";
import buttonStyles from "../atoms/button/button.module.css";

const CreateEventForm = () => {
  const initialState = {
    fields: {
      name: "test",
      date: "",
      startTime: "",
      endTime: "",
      location: "",
      invite: "",
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
              label="Event Name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />

            <FormInput
              label="Date"
              type="text"
              name="date"
              value={fields.date}
              onChange={handleFieldChange}
            />
            <div className={formStyles.splitInput}>
              <FormInput
                label="Start"
                type="text"
                name="startTime"
                value={fields.startTime}
                onChange={handleFieldChange}
              />
              <FormInput
                label="End"
                type="text"
                name="endTime"
                value={fields.endTime}
                onChange={handleFieldChange}
              />
            </div>

            <FormInput
              label="Location"
              type="text"
              name="location"
              value={fields.location}
              onChange={handleFieldChange}
            />

            <FormInput
              label="Invite"
              type="text"
              name="invite"
              value={fields.invite}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <Button
          className={buttonStyles.createEvent}
          type="submit"
          label="Create Event"
        />
      </form>
    </>
  );
};

export default CreateEventForm;
