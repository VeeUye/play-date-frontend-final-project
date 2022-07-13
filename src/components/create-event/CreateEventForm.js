import React, { useState, useEffect } from "react";
import getUserFriends from "../../requests/users/getUserFriends";
import FormInput from "../atoms/form-input/FormInput";
import MultiSelectInput from "../atoms/form-input/MultiSelectInput";
import postEvent from "../../requests/events/postEvent";
import Alert from "../../requests/alert/Alert";
import Button from "../atoms/button/Button";
import formStyles from "./create-event-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";
import { UserAuth } from "../../contexts/AuthContext";

const CreateEventForm = () => {
  const [friends, setFriends] = useState([]);

  const { user } = UserAuth();

  useEffect(() => {
    getUserFriends(user.uid).then((result) => {
      const friendsInvite = result.map((friend) => {
        return { value: friend.userId, label: friend.name };
      });
      setFriends(friendsInvite);
    });
  }, []);

  const initialState = {
    fields: {
      name: "test",
      description: "",
      date_start: "",
      date_end: "",
      location: "",
      friends_invited: [],
      owner: "",
    },
    dates: {
      date_start: "",
      date_end: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [dates, setDates] = useState(initialState.dates);

  const [alert, setAlert] = useState(initialState.alert);

  const handleCreateEvent = (event) => {
    event.preventDefault();
    dates.date_start = new Date(fields.date_start);
    dates.date_end = new Date(fields.date_end);
    setAlert({ message: "", isSuccess: false });
    console.log(fields);
    console.log(dates);
    postEvent(fields, setAlert);
    setFields(initialState.fields);
    setDates(initialState.dates);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleMultiInviteChange = (event) => {
    const selectedFriends = event.map((friend) => friend.value);
    setFields({ ...fields, ["friends_invited"]: selectedFriends });
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

            <MultiSelectInput
              styles={inputStyles.input}
              label="Invite"
              onChange={handleMultiInviteChange}
              options={friends}
            />

            <Alert message={alert.message} success={alert.isSuccess} />

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
