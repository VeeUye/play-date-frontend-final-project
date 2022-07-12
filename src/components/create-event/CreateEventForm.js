import React, { useState } from "react";
import FormInput from "../atoms/form-input/FormInput";
import postEvent from "../../requests/events/postEvent";
import Button from "../atoms/button/Button";
import formStyles from "./create-event-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";

const CreateEventForm = () => {
  const initialState = {
    fields: {
      name: "test",
      description: "",
      date_start: "",
      date_end: "",
      location: "",
      invite: "",
    },
  };

  const initialDates = {
    dates: {
      date_start: "",
      date_end: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [dates, setDates] = useState(initialDates.dates);

  const handleCreateEvent = (event) => {
    event.preventDefault();
    dates.date_start = new Date(fields.date_start);
    dates.date_end = new Date(fields.date_end);
    postEvent(fields, dates);
    setFields(initialState.fields);
    setDates(initialDates.dates);
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
              label="Description"
              type="text"
              name="description"
              value={fields.description}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Start"
              type="datetime-local"
              name="date_start"
              value={fields.date_start}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="End"
              type="datetime-local"
              name="date_end"
              value={fields.date_end}
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
