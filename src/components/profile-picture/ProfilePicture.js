import React, { useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import profilePictureStyles from "./profile-picture.module.css";
import buttonStyles from "../atoms/button/button.module.css";

const ProfilePicture = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

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
        setProgresspercent(progress);
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
      {!imgUrl && (
        <div className="outerbar">
          <div className="innerbar" style={{ width: `${progresspercent}%` }}>
            {progresspercent}%
          </div>
        </div>
      )}
      {imgUrl && (
        <img
          className={profilePictureStyles.profileImg}
          src={imgUrl}
          alt="uploaded file"
          height={200}
        />
      )}
      <form onSubmit={handleSubmit} className="form">
        <input type="file" />
        <button className={buttonStyles.pictureUpload} type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProfilePicture;
