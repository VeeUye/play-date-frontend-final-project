import React from "react";
import Image from "../../assets/images/avatar.svg";
import Image1 from "../../assets/images/friend1.svg";
import Image2 from "../../assets/images/friend2.svg";
import Image3 from "../../assets/images/friend3.svg";

import SmallTitle from "../atoms/small-title/SmallTitle";

import SuperSubHeading from "../atoms/supersubheading/SuperSubheading";
import superSubstyles from "../atoms/supersubheading/supersubheading.module.css";

import myProfileStyles from "../my-profile/my-profile.module.css";

import { Icon } from '@iconify/react';
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";

// import PropTypes from "prop-types";

const MyProfile = () => {
    return (
        <div className={myProfileStyles.background}>

            <div className={myProfileStyles.hero}>
            </div>

            <div className={myProfileStyles.profileCard}>
                <img className={myProfileStyles.avatarImage} src={Image} alt="user profile picture" />
                <SmallTitle className={myProfileStyles.smallTitle} text="JOHNSON DOE" />
                <SuperSubHeading className={superSubstyles.myProfile} text="@johnsondoe" />
            </div>

            <div className={myProfileStyles.card1}>
                <div className={myProfileStyles.cardItem}>
                    <Icon className={myProfileStyles.icon} icon="carbon:location-filled" />
                    <SuperSubHeading className={superSubstyles.myProfile} text="Manchester" />
                </div>

                <div className={myProfileStyles.cardItem}>
                <Icon className={myProfileStyles.icon} icon="cil:child" />
                <SuperSubHeading className={superSubstyles.myProfile} text="Sophie and Timmy" />
                </div>
            </div>

            <div className={myProfileStyles.buttons}>
                <Button className={buttonStyles.myProfile1} label="CREATE EVENT" />
                <Button className={buttonStyles.myProfile1} label="MY EVENTS" />
            </div>

            <div className={myProfileStyles.friendAlertCard}>
                <img className={myProfileStyles.img2} src={Image2} alt="friend2 profile picture" />
                <div className={myProfileStyles.card}>
                    <h2>YOU ARE INVITED</h2>
                    <p className={myProfileStyles.pBig}>Seesaw Adventure!</p>
                    <p className={myProfileStyles.p}>
                        16th July 2022  | 9:00 - 12:00
                    </p>
                    <p className={myProfileStyles.p}>
                        Manchester park, Manchester
                    </p>
                    <p className={myProfileStyles.p}>from @bobby1234</p>
                    <div className={myProfileStyles.buttonsAlert}>
                        <Button className={buttonStyles.myProfile2} label="ACCEPT" />
                        <Button className={buttonStyles.myProfile2} label="DECLINE" />
                    </div>
                </div>
            </div>

            <div className={myProfileStyles.friendList}>
                <SmallTitle className={myProfileStyles.smallTitle2} text="FRIENDS" />

                <div className={myProfileStyles.friendImages}>
                    <img className={myProfileStyles.img1} src={Image1} alt="friend1 profile picture" />
                    <img className={myProfileStyles.img2} src={Image2} alt="friend2 profile picture" />
                    <img className={myProfileStyles.img3} src={Image3} alt="friend3 profile picture" />
                </div>
                <div className={myProfileStyles.friendNames}>
                    <SuperSubHeading className={superSubstyles.myProfile} text="Maria" />
                    <SuperSubHeading className={superSubstyles.myProfile} text="Bobby" />
                    <SuperSubHeading className={superSubstyles.myProfile} text="Anna" />
                </div>
            </div>
        </div>
    );
};

{/* MyProfile.propTypes = {
    name: PropTypes.string
}; */}

export default MyProfile;

