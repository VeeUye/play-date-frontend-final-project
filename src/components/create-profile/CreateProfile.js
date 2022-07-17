import React, { useState } from "react";
import screenSize from "../../functions/screenSize";
import ProfilePicture from "../profile-picture/ProfilePicture";
import CreateProfileForm from "./CreateProfileForm";
import SmallTitle from "../atoms/small-title/SmallTitle";
import Image from "../../assets/images/skater.svg";
import createProfileStyles from "./create-profile.module.css";
import titleStyles from "../atoms/small-title/small-title.module.css";
import { UserAuth } from "../../contexts/AuthContext";
import LoadSpinner from "../load-spinner/LoadSpinner";

const CreateProfile = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const { user, token } = UserAuth();
  const isSmall = screenSize();
  return (
    <div
      className={
        isSmall
          ? createProfileStyles.smallScreen
          : createProfileStyles.bigScreen
      }
    >
      {!user || !token ? (
        <LoadSpinner />
      ) : (
        <>
          <div className="background">
            <SmallTitle
              className={titleStyles.createProfile}
              text="Create Profile"
            />
            <div className={createProfileStyles.picUpload}>
              <ProfilePicture imgUrl={imgUrl} setImgUrl={setImgUrl} />
            </div>
            <CreateProfileForm imgUrl={imgUrl} user={user} token={token} />
            <img
              className={createProfileStyles.img}
              src={Image}
              alt="skater boy"
            />
          </div>
          <img
            className={createProfileStyles.img2}
            src={Image}
            alt="skater boy"
          />
        </>
      )}
    </div>
  );
};

export default CreateProfile;
