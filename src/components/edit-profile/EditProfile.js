import React from "react";
import screenSize from "../../functions/screenSize";
import EditProfileForm from "./EditProfileForm";
import SmallTitle from "../atoms/small-title/SmallTitle";
import Image from "../../assets/images/skater.svg";
import editProfileStyles from "./edit-profile.module.css";
import titleStyles from "../atoms/small-title/small-title.module.css";

const CreateProfile = () => {
  const isSmall = screenSize();
  return (
    <>
      <div
        className={
          isSmall ? editProfileStyles.smallScreen : editProfileStyles.bigScreen
        }
      >
        <div className="background">
          <SmallTitle
            className={titleStyles.createProfile}
            text="Edit Profile"
          />
          <EditProfileForm />
          <img className={editProfileStyles.img} src={Image} alt="skater boy" />
        </div>
        <img className={editProfileStyles.img2} src={Image} alt="skater boy" />
      </div>
    </>
  );
};

export default CreateProfile;
