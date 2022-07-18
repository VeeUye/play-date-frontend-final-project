import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import getMyProfile from "../../requests/profile/getMyProfile";
import getMyEvents from "../../requests/events/getMyEvents";
import getUserFriends from "../../requests/users/getUserFriends";
import LoadSpinner from "../load-spinner/LoadSpinner";

// import Image from "../../assets/images/avatar.svg";
// import Image1 from "../../assets/images/friend1.svg";
// import Image2 from "../../assets/images/friend2.svg";
// import Image3 from "../../assets/images/friend3.svg";

import SmallTitle from "../atoms/small-title/SmallTitle";
// import myEventsStyles from "../myEvents/my-events.module.css";
import EventCard from "../myEvents/EventCard";
import SuperSubHeading from "../atoms/supersubheading/SuperSubheading";
import superSubstyles from "../atoms/supersubheading/supersubheading.module.css";
import myProfileStyles from "../my-profile/my-profile.module.css";
// import ProfileImage from "../atoms/profile-image/ProfileImage";

import { Icon } from "@iconify/react";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";

const MyProfile = () => {
    const history = useHistory();
    const { user, token } = UserAuth();

    const [userData, setUserData] = useState([]);
    const [events, setEvents] = useState([]);
    const [userFriend, setUserFriends] = useState([]);
    const [eventFriends, setEventFriends] = useState([]);

    useEffect(() => {
        getMyProfile(user.uid, token)
            .then((userResults) => {
                setUserData(userResults)
            });
        getUserFriends(user.uid, token)
            .then((userFriendResults) => {
                setUserFriends(userFriendResults);
            });
        getMyEvents(setEvents, user.uid, token).then((eventResults) => {
            if (eventResults) {
                getUserFriends(user.uid, token)
                    .then((userFriendResults) => {
                        const friendsEventsArray = [];
                        if (userFriendResults) {
                            setUserFriends(userFriendResults);
                            userFriendResults.map((friend) => {
                                eventResults.map((event) => {
                                    if (friend.userId === event.owner) {
                                        friendsEventsArray.push({
                                            ["friend"]: friend,
                                            ["event"]: event,
                                        });
                                    }
                                });
                            });
                        }
                        return friendsEventsArray;
                    })
                    .then((friendsEvents) => {
                        setEventFriends(friendsEvents);
                    });
            }
        });
    }, [user]);

    console.log(eventFriends);

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
            {!userData || !userFriend || !eventFriends ? (
                <LoadSpinner />
            ) : (
                <div className={myProfileStyles.background}>
                    <div className={myProfileStyles.hero}></div>

                    {/* PROFILE SECTION */}
                    <div className={myProfileStyles.profileCard}>
                        <img
                            className={myProfileStyles.avatarImage}
                            src={userData.imgUrl}
                            alt="user profile picture"
                        />
                        {/* <ProfileImage src={userData.imgUrl} alt="user profile picture" /> */}
                        <SmallTitle
                            className={myProfileStyles.smallTitle}
                            text={userData.name}
                        />
                        <SuperSubHeading
                            className={superSubstyles.myProfile}
                            text={` " ${userData.description} " `}
                        />
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
                                text={String(userData.children)}
                            />
                        </div>
                        <Button
                            className={buttonStyles.myProfile3}
                            label="EDIT PROFILE"
                            onClick={handleEditProfile}
                        ></Button>
                    </div>
                    <hr className="rounded"></hr>
                    {/* BUTTON SECTION */}
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

                    {/* FRIEND INVITATION ALERT SECTION */}
                    <div className={myProfileStyles.friendAlertCard}>
                        {events.length > 0 && (
                            <div className={myProfileStyles.eventCard}>
                                {eventFriends.map((event, index) => (
                                    <div key={index} className={myProfileStyles.friendAlertItem}>
                                        <figure>
                                            <img
                                                className={myProfileStyles.profileImg}
                                                src={event.friend.imgUrl}
                                                alt="friend2 profile picture"
                                            />
                                            <figcaption className={myProfileStyles.caption}>
                                                {event.friend.name}
                                            </figcaption>
                                        </figure>
                                        <h2>INVITED YOU TO AN EVENT</h2>
                                        <EventCard key={index} eventData={event.event} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* FRIEND LIST SECTION */}
                    <div className={myProfileStyles.friendListContainer}>
                        <SmallTitle
                            className={myProfileStyles.smallTitle2}
                            text="FRIENDS" />

                        <ul className={myProfileStyles.friendList}>
                            {/* IMAGE WITH CAPTION USING LIVE DATA BELOW */}

                            {userFriend.map((friend, index) => (
                                <li className={myProfileStyles.friendListItem} key={index}>
                                    <img
                                        className={myProfileStyles.profileImg}
                                        src={friend.imgUrl}
                                        alt="friend2 profile picture"
                                    />
                                    <figcaption className={myProfileStyles.caption}>
                                        {friend.name}
                                    </figcaption>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyProfile;
