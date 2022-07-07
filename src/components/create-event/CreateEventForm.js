import React, { useState } from "react";
import FormInput from "../atoms/form-input/FormInput";
import formStyles from "./create-event-form.module.css";

const CreateEventForm = () => {
  const initialState = {
    fields: {
      name: "",
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
              name="Event Name"
              value={fields.name}
              onChange={handleFieldChange}
            />

            <FormInput
              label="Date"
              type="text"
              name="Date"
              value={fields.date}
              onChange={handleFieldChange}
            />
            <div className={formStyles.splitInput}>
              <FormInput
                label="Start"
                type="text"
                name="Start"
                value={fields.startTime}
                onChange={handleFieldChange}
              />
              <FormInput
                label="End"
                type="text"
                name="End"
                value={fields.endTime}
                onChange={handleFieldChange}
              />
            </div>

            <FormInput
              label="Location"
              type="text"
              name="Location"
              value={fields.location}
              onChange={handleFieldChange}
            />

            <FormInput
              label="Invite"
              type="text"
              name="Invite"
              value={fields.invite}
              onChange={handleFieldChange}
            />
          </div>
        </div>

        <div className={formStyles.field2}></div>
      </form>
    </>
  );
};

export default CreateEventForm;
