import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import getMyProfile from "../../requests/profile/getMyProfile";
import getMyEvents from "../../requests/events/getMyEvents"
import getUserFriends from "../../requests/users/getUserFriends";

// import Image from "../../assets/images/avatar.svg";
// import Image1 from "../../assets/images/friend1.svg";
import Image2 from "../../assets/images/friend2.svg";
// import Image3 from "../../assets/images/friend3.svg";

import SmallTitle from "../atoms/small-title/SmallTitle";
import myEventsStyles from "../myEvents/my-events.module.css";

import EventCard from "../myEvents/EventCard";
import SuperSubHeading from "../atoms/supersubheading/SuperSubheading";
import superSubstyles from "../atoms/supersubheading/supersubheading.module.css";

import myProfileStyles from "../my-profile/my-profile.module.css";

import { Icon } from '@iconify/react';
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";



const MyProfile = () => {
    const history = useHistory();
    const { user, token } = UserAuth();

    const [userData, setUserData] = useState([]);
    const [events, setEvents] = useState([]);
    const [userFriend, setUserFriends] = useState([]);

    useEffect(() => {
        // console.log(user.uid);
        getMyProfile(user.uid, token)
            .then((userResults) => {
                setUserData(userResults)
            })
        getMyEvents(setEvents, user.uid, token)
        if (events.length > 0) {
            setEvents(true);
        }
        getUserFriends(user.uid, token)
            .then((userFriendResults) => {
                setUserFriends(userFriendResults);
            })
    }, []);
    // console.log(userFriend);

    // const userChildren = userData.children;
    // const child = userChildren.join(",");

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
        <div className={myProfileStyles.background}>

            <div className={myProfileStyles.hero}>
            </div>


            <div className={myProfileStyles.profileCard}>
                {/* <img className={myProfileStyles.avatarImage} src={Image} alt="user profile picture" /> */}
                <img className={myProfileStyles.avatarImage} src={userData.profile_pic} alt="user profile picture" />
                <SmallTitle className={myProfileStyles.smallTitle} text={userData.name} />
                <Button className={buttonStyles.myProfile3} label="EDIT PROFILE" onClick={handleEditProfile}></Button>
            </div>

            <div className={myProfileStyles.card1}>
                <div className={myProfileStyles.cardItem}>
                    <Icon className={myProfileStyles.icon} icon="carbon:location-filled" />
                    <SuperSubHeading className={superSubstyles.myProfile} text={userData.location} />
                </div>

                <div className={myProfileStyles.cardItem}>
                    <Icon className={myProfileStyles.icon} icon="cil:child" />
                    <SuperSubHeading className={superSubstyles.myProfile} text={userData.children} />
                </div>
            </div>

            <div className={myProfileStyles.buttons}>
                <Button className={buttonStyles.myProfile1} label="CREATE EVENT" onClick={handleCreateEvent}></Button>

                <Button className={buttonStyles.myProfile1} label="MY EVENTS" onClick={handleMyEvents}></Button>
            </div>

            <div className={myProfileStyles.friendAlertCard}>
                {/* <h2>YOU ARE INVITED</h2> */}
                <div className={myProfileStyles.friendCardItem}>
                    <img className={myProfileStyles.img2} src={Image2} alt="friend2 profile picture" />
                    <SuperSubHeading className={superSubstyles.myProfile2} text={"Bobby"} />
                </div>
                <div className={myProfileStyles.eventCard}>
                    {events.length > 0 &&
                        <div className={myEventsStyles.myEvents} >
                            {events.map((event) => (
                                <EventCard key={event.uid} eventData={event} />
                            ))}
                        </div>
                    }
                </div>
            </div>

            <div className={myProfileStyles.friendListContainer}>
                <SmallTitle className={myProfileStyles.smallTitle2} text="FRIENDS" />

                <ul className={myProfileStyles.friendList}>
                    {userFriend.map(friend => <li className={myProfileStyles.friendListItem} key={friend.name}>{friend.name}</li>)}
                </ul>
                {/* <div className={myProfileStyles.friendImages}>
                    <img className={myProfileStyles.img1} src={Image1} alt="friend1 profile picture" />
                    <img className={myProfileStyles.img2} src={Image2} alt="friend2 profile picture" />
                    <img className={myProfileStyles.img3} src={Image3} alt="friend3 profile picture" />
                </div>
                <div className={myProfileStyles.friendNames}>
                    <SuperSubHeading className={superSubstyles.myProfile} text="Maria" />
                    <SuperSubHeading className={superSubstyles.myProfile} text="Bobby" />
                    <SuperSubHeading className={superSubstyles.myProfile} text="Anna" />
                </div> */}
            </div>
        </div>
    );
};

{/* MyProfile.propTypes = {
    name: PropTypes.string
}; */}

export default MyProfile;

