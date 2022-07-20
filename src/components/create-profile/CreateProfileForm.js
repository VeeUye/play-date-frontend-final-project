import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import postProfile from "../../requests/profile/postProfile";
import PropTypes from "prop-types";
import FormInput from "../atoms/form-input/FormInput";
import Alert from "../../requests/alert/Alert";
import Button from "../atoms/button/Button";
import formStyles from "./create-profile-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";

const CreateProfileForm = ({ imgUrl, user, token }) => {
  const history = useHistory();

  const initialState = {
    fields: {
      name: "",
      description: "",
      children: "",
      location: "",
      friends: ["firstFriend"],
      imgUrl: "",
      userId: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);

  const [fields, setFields] = useState(initialState.fields);

  useEffect(() => {
    setFields({ ...fields, ["userId"]: user.uid });
  }, []);

  const handleCreateEvent = (event) => {
    event.preventDefault();
    const childrenArray = fields.children.replace(/\s+/g, "").split(",");
    const fields2 = { ...fields, children: childrenArray, ["imgUrl"]: imgUrl };
    setAlert({ message: "", isSuccess: false });
    const createUserRequest = async () => {
      await postProfile(fields2, token, setAlert);
      setFields(initialState.fields);
      history.push("/my-profile");
    };
    createUserRequest();
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
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
              label="About You"
              type="text"
              name="description"
              value={fields.description}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Child/Children's name"
              type="text"
              name="children"
              placeholder="Bart, Lisa, Maggie"
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
              label="Create Profile"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProfileForm;

CreateProfileForm.propTypes = {
  imgUrl: PropTypes.string,
  user: PropTypes.object,
  token: PropTypes.string,
};
