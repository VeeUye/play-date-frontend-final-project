import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { InviteResponse } from "../../contexts/InviteContext";
import Select from "../atoms/form-input/SelectInput";
import getMyProfile from "../../requests/profile/getMyProfile";
import getAddFriends from "../../requests/users/getAddFriends";
import getMyPendingEvents from "../../requests/events/getMyPendingEvents";
import getUserFriends from "../../requests/users/getUserFriends";
import editProfile from "../../requests/profile/editProfile";
import LoadSpinner from "../load-spinner/LoadSpinner";
import acceptEvent from "../../requests/events/putAcceptEvent";
import declineEvent from "../../requests/events/putDeclineEvent";
import addButton from "../../assets/images/circle-button.svg";
import Alert from "../../requests/alert/Alert";
import SmallTitle from "../atoms/small-title/SmallTitle";
import EventCard from "../myEvents/EventCard";
import SuperSubHeading from "../atoms/supersubheading/SuperSubheading";
import superSubstyles from "../atoms/supersubheading/supersubheading.module.css";
import myProfileStyles from "../my-profile/my-profile.module.css";
import { Icon } from "@iconify/react";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";

const MyProfile = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const history = useHistory();
  const { user, token } = UserAuth();
  const {
    acceptedResponse,
    setAcceptedResponse,
    declinedResponse,
    setDeclinedResponse,
  } = InviteResponse();
  const [userData, setUserData] = useState([]);
  const [events, setEvents] = useState([]);
  const [userFriend, setUserFriends] = useState([]);
  const [addFriends, setAddFriends] = useState([]);
  const [eventFriends, setEventFriends] = useState([]);
  const [cardRemoved, setCardRemoved] = useState(0);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    const getUserFriendData = async () => {
      const getMyProfileData = await getMyProfile(user.uid, token);
      if (getMyProfileData) {
        setUserData(getMyProfileData);
      }

      const getUserFriendsData = await getUserFriends(user.uid, token);
      if (getUserFriendsData) {
        setUserFriends(getUserFriendsData);
      }

      const getAddFriendsData = await getAddFriends(token);
      if (getAddFriendsData && getUserFriendsData) {
        const filterUsers = getAddFriendsData
          .filter(
            (o1) => !getUserFriendsData.some((o2) => o1.userId === o2.userId)
          )
          .map((friend) => {
            return { value: friend.userId, label: friend.name };
          });

        setAddFriends(filterUsers);
      }
    };

    getUserFriendData();
  }, [user, selectedFriend]);

  useEffect(() => {
    const getUserEventsData = async () => {
      const getMyPendingEventsData = await getMyPendingEvents(
        setEvents,
        user.uid,
        token
      );

      const getUserFriendsData = await getUserFriends(user.uid, token);

      if (getUserFriendsData) {
        const friendsEventsArray = [];
        if (getUserFriendsData) {
          setUserFriends(getUserFriendsData);
          getUserFriendsData.map((friend) => {
            getMyPendingEventsData.map((event) => {
              if (friend.userId === event.owner) {
                friendsEventsArray.push({
                  ["friend"]: friend,
                  ["event"]: event,
                });
              }
            });
          });
          setEventFriends(friendsEventsArray);
        }
      }
    };

    getUserEventsData();
  }, [user, cardRemoved]);

  useEffect(() => {
    const acceptEventResponse = async () => {
      await acceptEvent(acceptedResponse, token);
      setCardRemoved((previous) => previous + 1);
    };
    acceptEventResponse();
  }, [acceptedResponse]);

  useEffect(() => {
    const declineEventResponse = async () => {
      await declineEvent(acceptedResponse, token);
      setCardRemoved((previous) => previous + 1);
    };
    declineEventResponse();
  }, [declinedResponse]);

  const handleCreateEvent = () => {
    history.push("/create-event");
  };

  const handleMyEvents = () => {
    history.push("/my-events");
  };

  const handleEditProfile = () => {
    history.push("/edit-profile");
  };

  const handleSelectFriend = (event) => {
    setSelectedFriend({ event });
  };

  const handleAddFriend = () => {
    const fields = {
      ["friends"]: [selectedFriend.event.value, ...userData.friends],
    };
    editProfile(fields, userData.userId, token, setAlert);
    setSelectedFriend({});
  };

  return (
    <>
      {!userData || !userFriend || !eventFriends || !addFriends ? (
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
          {/* <h2>INVITED YOU TO AN EVENT</h2> */}
          <div className={myProfileStyles.friendAlertCard}>
            {events.length > 0 && (
              <div className={myProfileStyles.eventCard}>
                {eventFriends.slice(0, 3).map((event, index) => (
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
                    <EventCard
                      key={index}
                      eventData={event.event}
                      userId={userData.userId}
                      setAcceptedResponse={setAcceptedResponse}
                      setDeclinedResponse={setDeclinedResponse}
                    />
                  </div>
                ))}
              </div>
            )}
            {eventFriends.length > 3 && (
              <div
                className={myProfileStyles.additionalEvents}
                onClick={handleMyEvents}
              >
                You have <strong>{eventFriends.length - 3}</strong> additional
                event requests.
              </div>
            )}
          </div>

          {/* FRIEND LIST SECTION */}
          <div className={myProfileStyles.friendListContainer}>
            <SmallTitle
              className={myProfileStyles.smallTitle2}
              text="FRIENDS"
            />
            <div className={myProfileStyles.friendAddContainer}>
              <div className={myProfileStyles.friendSearch}>
                <Select
                  styles={myProfileStyles.input}
                  onChange={handleSelectFriend}
                  options={addFriends}
                />
              </div>
              <div className={myProfileStyles.friendAdd}>
                <img
                  src={addButton}
                  onClick={handleAddFriend}
                  alt="Add Button"
                />
              </div>
            </div>
            <Alert message={alert.message} success={alert.isSuccess} />
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
