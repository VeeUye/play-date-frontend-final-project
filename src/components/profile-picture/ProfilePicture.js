import React from "react";
import {
  getStorage,
  connectStorageEmulator,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import PropTypes from "prop-types";
import screenSize from "../../functions/screenSize";
import profilePictureStyles from "./profile-picture.module.css";
import buttonStyles from "../atoms/button/button.module.css";
import DefaultPic from "../../assets/images/avatar.svg";
import { Icon } from "@iconify/react";

const ProfilePicture = ({imgUrl, setImgUrl}) => {
  const storage = getStorage();
  const imgSrc = imgUrl ? imgUrl : DefaultPic;
  const isSmall = screenSize();

  if (location.hostname === "localhost") {
    connectStorageEmulator(storage, "localhost", 9199);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <div
        className={
          isSmall
            ? profilePictureStyles.imageContainerSmall
            : profilePictureStyles.imageContainerBig
        }
      >
        <label htmlFor="profile-upload">
          <img
            className={profilePictureStyles.profileImg}
            src={imgSrc}
            alt="uploaded file"
            height={200}
          />
          <Icon
            className={profilePictureStyles.cameraIcon}
            icon="ant-design:camera-twotone"
          />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <input
          className={profilePictureStyles.profileUpload}
          type="file"
          id="profile-upload"
        />
        <button className={buttonStyles.pictureUpload} type="submit">
          Set Image
        </button>
      </form>
    </div>
  );
};

export default ProfilePicture;

ProfilePicture.propTypes = {
  imgUrl: PropTypes.string,
  setImgUrl: PropTypes.func,
};