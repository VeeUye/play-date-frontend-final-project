import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import EventCard from "./EventCard";
import Image from "../../assets/images/papers.svg";
import myEventsStyles from "./my-events.module.css";
import SmallTitle from "../atoms/small-title/SmallTitle";
import titleStyles from "../atoms/small-title/small-title.module.css";

import getMyEvents from "../../requests/events/getMyEvents";
import LoadSpinner from "../load-spinner/LoadSpinner";
import "./my-events.module.css";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";

const MyEvents = () => {
  const history = useHistory();
  const [events, setEvents] = useState([]);
  const { user, token } = UserAuth();

  useEffect(() => {
    getMyEvents(setEvents, user.uid, token);
    if (events.length > 0) {
      setEvents(true);
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
            {events.length > 0 && (
              <div className={myEventsStyles.myEvents}>
                {events.map((event) => (
                  <EventCard key={event.id} eventData={event} />
                ))}
              </div>
            )}
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
