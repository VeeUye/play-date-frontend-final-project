import React from "react";
import Image from "../../assets/images/avatar.svg";
import SmallTitle from "../atoms/small-title/SmallTitle";
import myProfileStyles from "../my-profile/my-profile.module.css";
// import PropTypes from "prop-types";
import Hero from "./Hero";

const MyProfile = () => {
    return (
        <div classID={"container"}>
            HELLO
            <Hero />
            <div classID={myProfileStyles.profileCard}>
                <img className={myProfileStyles.img} src={Image} alt="user profile picture" />
                <SmallTitle className={myProfileStyles.smallTitle} text="JOHNSON DOE" />
            </div>
            <div className={myProfileStyles.friendAlert}>
                You are invited!
            </div>
            <div className={myProfileStyles.friendList}>
                <SmallTitle />
            </div>
        </div>
    );
};

{/* MyProfile.propTypes = {
    name: PropTypes.string
}; */}

export default MyProfile;

