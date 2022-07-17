import React from "react";
import {
  storage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "../../firebase"
import PropTypes from "prop-types";
import screenSize from "../../functions/screenSize";
import profilePictureStyles from "./profile-picture.module.css";
import DefaultPic from "../../assets/images/avatar.svg";
import { Icon } from "@iconify/react";

const ProfilePicture = ({imgUrl, setImgUrl}) => {
  const imgSrc = imgUrl ? imgUrl : DefaultPic;
  const isSmall = screenSize();

  const handleChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log('progress->',progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('download->',downloadURL);
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

      <form onChange={handleChange} className="form">
        <input
          className={profilePictureStyles.profileUpload}
          type="file"
          id="profile-upload"
        />
      </form>
    </div>
  );
};

export default ProfilePicture;

ProfilePicture.propTypes = {
  imgUrl: PropTypes.string,
  setImgUrl: PropTypes.func,
};