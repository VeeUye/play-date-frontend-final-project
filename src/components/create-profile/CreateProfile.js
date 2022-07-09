import React from "react";
import screenSize from "../../functions/screenSize";
import CreateProfileForm from "./CreateProfileForm";
import SmallTitle from "../atoms/small-title/SmallTitle";
import createProfileStyles from "./create-profile.module.css";
import titleStyles from "../atoms/small-title/small-title.module.css";

const CreateProfile = () => {
  const isSmall = screenSize();
  return (
    <>
      <div
        className={
          isSmall
            ? createProfileStyles.smallScreen
            : createProfileStyles.bigScreen
        }
      >
        <div className="background">
          <SmallTitle className={titleStyles.default} text="Create Profile" />
          <CreateProfileForm />
          <img
            className={createProfileStyles.img}
            src={Image}
            alt="girl floating"
          />
        </div>
        <img
          className={createProfileStyles.img2}
          src={Image}
          alt="girl floating"
        />
      </div>
    </>
  );
};

export default CreateProfile;
