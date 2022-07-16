import React, { useState } from "react";
import {
  getStorage,
  connectStorageEmulator,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import profilePictureStyles from "./profile-picture.module.css";
import buttonStyles from "../atoms/button/button.module.css";
import DefaultPic from "../../assets/images/avatar.svg";

const ProfilePicture = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const storage = getStorage();
  connectStorageEmulator(storage, "localhost", 9199);
  const imgSrc = imgUrl ? imgUrl : DefaultPic;

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
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <label htmlFor="profile-upload">
        <img
          className={profilePictureStyles.profileImg}
          src={imgSrc}
          alt="uploaded file"
          height={200}
        />
      </label>

      <form onSubmit={handleSubmit} className="form">
        <input
          className={profilePictureStyles.profileUpload}
          type="file"
          id="profile-upload"
        />
        <button className={buttonStyles.pictureUpload} type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProfilePicture;
