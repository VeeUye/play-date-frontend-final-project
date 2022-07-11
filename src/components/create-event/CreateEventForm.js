import React, { useState } from "react";
import FormInput from "../atoms/form-input/FormInput";
import Button from "../atoms/button/Button";
import formStyles from "./create-event-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
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
              label="Event Name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Date"
              type="date"
              name="date"
              value={fields.date}
              onChange={handleFieldChange}
            />
            <div className={formStyles.splitInput}>
              <FormInput
                className={inputStyles.input}
                label="Start"
                type="time"
                name="startTime"
                value={fields.startTime}
                onChange={handleFieldChange}
              />
              <FormInput
                className={inputStyles.input}
                label="End"
                type="time"
                name="endTime"
                value={fields.endTime}
                onChange={handleFieldChange}
              />
            </div>

            <FormInput
              className={inputStyles.input}
              label="Location"
              type="text"
              name="location"
              value={fields.location}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Invite"
              type="email"
              name="invite"
              value={fields.invite}
              onChange={handleFieldChange}
            />
            <Button
              className={buttonStyles.createEvent}
              type="submit"
              label="Create Event"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateEventForm;
