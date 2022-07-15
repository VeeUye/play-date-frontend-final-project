/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { getStorage } from "firebase/storage";
// import profilePicStyles from "./profile-picture/module.css";

const ProfilePicture = () => {
  const storage = getStorage();

  const allInputs = { imgURL: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  console.log(imageAsFile);
  const handleImageAsFile = (event) => {
    const image = event.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  return (
    <form>
      <input type="file" onChange={handleImageAsFile} />
    </form>
  );
};

export default ProfilePicture;
