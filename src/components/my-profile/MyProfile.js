import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import getMyProfile from "../../requests/profile/getMyProfile";
import getMyEvents from "../../requests/events/getMyEvents"
import getUserFriends from "../../requests/users/getUserFriends";
import LoadSpinner from "../load-spinner/LoadSpinner";

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
import ProfileImage from "../atoms/profile-image/ProfileImage";

import { Icon } from "@iconify/react";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";

const MyProfile = () => {
    const history = useHistory();
    const { user, token } = UserAuth();

    const [userData, setUserData] = useState([]);
    const [events, setEvents] = useState([]);
    const [userFriend, setUserFriends] = useState([]);

    useEffect(() => {
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

    const listFriends = userFriend.map((friend) =>
        <li className={myProfileStyles.friendListItem} key={friend.id}>{friend.name}</li>);

    const handleCreateEvent = () => {
        history.push("/create-event");
    };

    const handleMyEvents = () => {
        history.push("/my-events");
    };

    const handleEditProfile = () => {
        history.push("/edit-profile");
    };

    console.log(userFriend);

    return (
        <>
            {!userData ? (
                <LoadSpinner />
            ) : (
                <div className={myProfileStyles.background}>
                    <div className={myProfileStyles.hero}></div>

                    <div className={myProfileStyles.profileCard}>
                        {/* <img
                            className={myProfileStyles.avatarImage}
                            src={Image}
                            alt="user profile picture"
                        /> */}
                        {/* <img className={myProfileStyles.avatarImage} src={userData.profile_pic} alt="user profile picture" /> */}
                        <ProfileImage src={userData.profile_pic} />
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
                        <div className={myProfileStyles.friendAlertItem}>
                            <figure>
                                <img
                                    className={myProfileStyles.img2}
                                    src={Image2}
                                    alt="friend2 profile picture" />
                                <figcaption className={myProfileStyles.caption}>{userData.name}</figcaption>
                                {/* {userFriend.map(friend => <p key={friend.name}>{friend.name[1]}</p>)} */}
                            </figure>
                            <h2>INVITED YOU TO AN EVENT</h2>
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
                        <SmallTitle
                            className={myProfileStyles.smallTitle2}
                            text="FRIENDS" />

                        <ul className={myProfileStyles.friendList}>
                            {/* IMAGE WITH CAPTION USING LIVE DATA BELOW */}
                            <li>
                                <img
                                    className={myProfileStyles.img2}
                                    src={Image2}
                                    alt="friend2 profile picture" />
                                <figcaption className={myProfileStyles.caption}>{userData.name}</figcaption>
                            </li>

                            <li>
                                <img
                                    className={myProfileStyles.img2}
                                    src={Image2}
                                    alt="friend2 profile picture" />
                                <figcaption className={myProfileStyles.caption}>{userData.name}</figcaption>
                            </li>

                            {listFriends}
                        </ul>
                    </div>
                </div >
            )
            }
        </>
    );
};

{
    /* MyProfile.propTypes = {
      name: PropTypes.string
  }; */
}

export default MyProfile;
