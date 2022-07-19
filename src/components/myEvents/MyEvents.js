import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import EventCard from "./EventCard";
import Image from "../../assets/images/papers.svg";
import myEventsStyles from "./my-events.module.css";
import SmallTitle from "../atoms/small-title/SmallTitle";
import titleStyles from "../atoms/small-title/small-title.module.css";

import getMyEvents from "../../requests/events/getMyEvents";
import getMyPendingEvents from "../../requests/events/getMyPendingEvents";
import LoadSpinner from "../load-spinner/LoadSpinner";
import "./my-events.module.css";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";

const MyEvents = () => {
  const history = useHistory();
  const [events, setEvents] = useState([]);
  const [pendingEvents, setPendingEvents] = useState([]);
  const { user, token } = UserAuth();

  useEffect(() => {
    getMyEvents(setEvents, user.uid, token);
    if (events.length > 0) {
      setEvents(true);
    }
  }, [user]);

  useEffect(() => {
    getMyPendingEvents(setPendingEvents, user.uid, token);
    if (pendingEvents.length > 0) {
      setPendingEvents(true);
    }
  }, [user]);

  const handleCreateEvent = () => {
    history.push("/create-event");
};

  return (
    <div className={myEventsStyles.background}>
      {!user || !token ? (
        <LoadSpinner />
      ) : (
        <>
          <img className={myEventsStyles.img} src={Image} alt="papers" />
          <div>
            <SmallTitle className={titleStyles.myEvents} text="My Events" />
            {pendingEvents.length > 0 && (
              <div className={myEventsStyles.myPendingEvents}>
                <SmallTitle className={titleStyles.myPendingEvents} text="Pending invitations" />
              <div className={myEventsStyles.myEvents}>
                {pendingEvents.map((event) => (
                  <EventCard key={event.id} eventData={event} />
                ))}
              </div>
              </div>
            )}
            {events.length > 0 && (
              <div className={myEventsStyles.myEvents}>
                {events.map((event) => (
                  <EventCard key={event.id} eventData={event} />
                ))}
              </div>
            )}
            {events.length === 0 && <SmallTitle className={titleStyles.myEventsNoEvents} text="You don't have any events yet..." />}
            <div className={myEventsStyles.buttons}>
              <Button
                  className={buttonStyles.myEvents}
                  label="CREATE EVENT"
                  onClick={handleCreateEvent}
              ></Button>
            </div> 
          </div>
        </>
      )}
    </div>
  );
};

export default MyEvents;
