import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import getMyProfile from "../../requests/profile/getMyProfile";
import { UserAuth } from "../../contexts/AuthContext";
import LoadSpinner from "../load-spinner/LoadSpinner";

import Image from "../../assets/images/avatar.svg";
import Image1 from "../../assets/images/friend1.svg";
import Image2 from "../../assets/images/friend2.svg";
import Image3 from "../../assets/images/friend3.svg";

import SmallTitle from "../atoms/small-title/SmallTitle";

import SuperSubHeading from "../atoms/supersubheading/SuperSubheading";
import superSubstyles from "../atoms/supersubheading/supersubheading.module.css";

import myProfileStyles from "../my-profile/my-profile.module.css";

import { Icon } from "@iconify/react";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";

const MyProfile = () => {
  const history = useHistory();
  const { user, token } = UserAuth();

  const [userData, setUserData] = useState();

  useEffect(() => {
    getMyProfile(user.uid, token).then((userResults) => {
      setUserData(userResults);
    });
  }, [user]);

  const handleCreateEvent = () => {
    history.push("/create-event");
  };

  const handleMyEvents = () => {
    history.push("/my-events");
  };

  const handleEditProfile = () => {
    history.push("/edit-profile");
  };

  return (
    <>
      {!userData ? (
        <LoadSpinner />
      ) : (
        <div className={myProfileStyles.background}>
          <div className={myProfileStyles.hero}></div>

          <div className={myProfileStyles.profileCard}>
            <img
              className={myProfileStyles.avatarImage}
              src={Image}
              alt="user profile picture"
            />
            <SmallTitle
              className={myProfileStyles.smallTitle}
              text={userData.name}
            />
            <Button
              className={buttonStyles.myProfile3}
              label="EDIT PROFILE"
              onClick={handleEditProfile}
            ></Button>
          </div>

          <div className={myProfileStyles.card1}>
            <div className={myProfileStyles.cardItem}>
              <Icon
                className={myProfileStyles.icon}
                icon="carbon:location-filled"
              />
              <SuperSubHeading
                className={superSubstyles.myProfile}
                text={userData.location}
              />
            </div>

            <div className={myProfileStyles.cardItem}>
              <Icon className={myProfileStyles.icon} icon="cil:child" />
              <SuperSubHeading
                className={superSubstyles.myProfile}
                text={userData.children}
              />
            </div>
          </div>

          <div className={myProfileStyles.buttons}>
            <Button
              className={buttonStyles.myProfile1}
              label="CREATE EVENT"
              onClick={handleCreateEvent}
            ></Button>

            <Button
              className={buttonStyles.myProfile1}
              label="MY EVENTS"
              onClick={handleMyEvents}
            ></Button>
          </div>

          <div className={myProfileStyles.friendAlertCard}>
            <img
              className={myProfileStyles.img2}
              src={Image2}
              alt="friend2 profile picture"
            />
            <div className={myProfileStyles.card}>
              <h2>YOU ARE INVITED</h2>
              <p className={myProfileStyles.pBig}>Seesaw Adventure!</p>
              <p className={myProfileStyles.p}>16th July 2022 | 9:00 - 12:00</p>
              <p className={myProfileStyles.p}>Manchester park, Manchester</p>
              <p className={myProfileStyles.p}>from @bobby1234</p>
              <div className={myProfileStyles.buttonsAlert}>
                <Button className={buttonStyles.myProfile2} label="ACCEPT" />
                <Button className={buttonStyles.myProfile2} label="DECLINE" />
              </div>
            </div>
          </div>

          <div className={myProfileStyles.friendList}>
            <SmallTitle
              className={myProfileStyles.smallTitle2}
              text="FRIENDS"
            />

            <div className={myProfileStyles.friendImages}>
              <img
                className={myProfileStyles.img1}
                src={Image1}
                alt="friend1 profile picture"
              />
              <img
                className={myProfileStyles.img2}
                src={Image2}
                alt="friend2 profile picture"
              />
              <img
                className={myProfileStyles.img3}
                src={Image3}
                alt="friend3 profile picture"
              />
            </div>
            <div className={myProfileStyles.friendNames}>
              <SuperSubHeading
                className={superSubstyles.myProfile}
                text="Maria"
              />
              <SuperSubHeading
                className={superSubstyles.myProfile}
                text="Bobby"
              />
              <SuperSubHeading
                className={superSubstyles.myProfile}
                text="Anna"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

{
  /* MyProfile.propTypes = {
    name: PropTypes.string
}; */
}

export default MyProfile;
