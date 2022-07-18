import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import editProfile from "../../requests/profile/editProfile";
import PropTypes from "prop-types";
import FormInput from "../atoms/form-input/FormInput";
import Alert from "../../requests/alert/Alert";
import Button from "../atoms/button/Button";
import formStyles from "./edit-profile-form.module.css";
import inputStyles from "../atoms/form-input/form-input.module.css";
import buttonStyles from "../atoms/button/button.module.css";
// import EditProfile from "./EditProfile";
// import { UserAuth } from "../../contexts/AuthContext";

const EditProfileForm = ({ userData, imgUrl, user, token}) => {
  // const { user, token } = UserAuth();
  const history = useHistory();

  
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const childrenStr = userData.children.toString();

  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (userData.imgUrl) {
      setFields({ ...fields, ["imgUrl"]: imgUrl });
    }
  }, []);

  const [alert, setAlert] = useState(initialState.alert);

  const handleEditProfile = (event) => {
    const userId = user.uid;
    event.preventDefault();
    if (fields.children) {
      const childrenArray = fields.children.replace(/\s+/g,"").split(",");
      const fields2 = {...fields, children: childrenArray};
      editProfile(fields2, userId, token, setAlert);
    } else {
      editProfile(fields, userId, token, setAlert);
    }
    history.push("/my-profile");
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
              placeholder={userData.name}
              value={fields.name}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="About You"
              type="text"
              name="description"
              placeholder={userData.description}
              value={fields.description}
              onChange={handleFieldChange}
            />
            
            <FormInput
              className={inputStyles.input}
              label="Child/Children's Name"
              type="text"
              name="children"
              placeholder={childrenStr}
              value={fields.children}
              onChange={handleFieldChange}
            />

            <FormInput
              className={inputStyles.input}
              label="Location"
              type="text"
              name="location"
              placeholder={userData.location}
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
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.string), 
    location: PropTypes.string,
    friends: PropTypes.arrayOf(PropTypes.string), 
    imgUrl: PropTypes.string,
  }),
  imgUrl: PropTypes.string,
  user:  PropTypes.object,
  token: PropTypes.string,
}
