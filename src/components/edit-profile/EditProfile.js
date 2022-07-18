import React, {useState, useEffect} from "react";
import screenSize from "../../functions/screenSize";
import EditProfileForm from "./EditProfileForm";
import ProfilePicture from "../profile-picture/ProfilePicture";
import SmallTitle from "../atoms/small-title/SmallTitle";
import Image from "../../assets/images/skater.svg";
import editProfileStyles from "./edit-profile.module.css";
import getMyProfile from "../../requests/profile/getMyProfile";
import { UserAuth } from "../../contexts/AuthContext";
import LoadSpinner from "../load-spinner/LoadSpinner";
import titleStyles from "../atoms/small-title/small-title.module.css";

const EditProfile = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const { user, token } = UserAuth();
  const [userData, setUserData] = useState(null);

  useEffect( () => {
    getMyProfile(user.uid, token)
    .then((result) => {
      setUserData(result);
      console.log('EP->',result);
      if(result.imgUrl) {
        console.log('ud.imgUrl->',result.imgUrl);
        setImgUrl(result.imgUrl);
      }
    });
  }, [user]);

  const isSmall = screenSize();
  return (
    <>
      {!userData ? (
        <LoadSpinner />
      ) : (
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
          <div className={editProfileStyles.picUpload}>
            <ProfilePicture imgUrl={imgUrl} setImgUrl={setImgUrl} />
          </div>
          <EditProfileForm imgUrl={imgUrl} user={user} token={token} />
          <img className={editProfileStyles.img} src={Image} alt="skater boy" />
        </div>
        <img className={editProfileStyles.img2} src={Image} alt="skater boy" />
      </div>
      )}
    </>
  );
};

export default EditProfile;
