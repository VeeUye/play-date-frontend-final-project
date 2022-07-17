import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Image from "../../assets/images/papers.svg";
import myEventsStyles from "./my-events.module.css";
import SmallTitle from "../atoms/small-title/SmallTitle";
import titleStyles from "../atoms/small-title/small-title.module.css";
import { UserAuth } from "../../contexts/AuthContext";
import getMyEvents from "../../requests/events/getMyEvents"
import "./my-events.module.css";


const MyEvents = () => {
    const [events, setEvents] = useState([]);
    const { user, token } = UserAuth();
    
    useEffect ( () => {
        getMyEvents(setEvents, user.uid, token)
        if (events.length>0) {
            setEvents(true);
        }
    },[])

    return (
        <div className={myEventsStyles.background}>
            <img
            className={myEventsStyles.img}
            src={Image}
            alt="papers"
            />
          <div>
            <SmallTitle className={titleStyles.myEvents} text="My Events" />
        { events.length > 0 && 
            <div className={myEventsStyles.myEvents} >
                {events.map( (event) => (
                    <EventCard key={event.id} eventData={event} />
                ))}
            </div>
        }
          </div>
        </div>
    );
};

export default MyEvents;