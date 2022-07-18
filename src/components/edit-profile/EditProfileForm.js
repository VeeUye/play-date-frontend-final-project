import React, { useState, useEffect } from "react";
import editProfile from "../../requests/profile/editProfile";
import PropTypes from "prop-types";
import FormInput from "../atoms/form-input/FormInput";
import Alert from "../../requests/alert/Alert";
import Button from "../atoms/button/Button";
import formStyles from "./edit-profile-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";
// import { UserAuth } from "../../contexts/AuthContext";

const EditProfileForm = ({ imgUrl, user, token}) => {
  // const { user, token } = UserAuth();
  
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (imgUrl) {
      setFields({ ...fields, ["imgUrl"]: imgUrl });
    }
  }, []);

  const [alert, setAlert] = useState(initialState.alert);

  const handleEditProfile = (event) => {
    const userId = user.uid;
    setFields({ ...fields, ["userId"]: user.uid })
    event.preventDefault();
    editProfile(fields, userId, token, setAlert);
  };

  const handleFieldChange = (event) => {
    setFields({
       ...fields, 
       [event.target.name]: event.target.value,
       ["imgUrl"]: imgUrl, 
      });
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

EditProfileForm.propTypes = {
  imgUrl: PropTypes.string,
  user: PropTypes.object,
  token: PropTypes.string,
};
