import React from "react";
import PropTypes from "prop-types";
import EventCard from "./EventCard";
import Image from "../../assets/images/papers.svg";
import myEventsStyles from "./my-events.module.css";
import SmallTitle from "../atoms/small-title/SmallTitle";
import titleStyles from "../atoms/small-title/small-title.module.css";
import "./my-events.module.css";

const MyEvents = ({ events }) => {
    return (
        <div className={myEventsStyles.background}>
            <img
            className={myEventsStyles.img}
            src={Image}
            alt="papers"
            /><div>
             <SmallTitle className={titleStyles.myEvents} text="My Events" />
             <div className={myEventsStyles.myEvents}>
            {events.map(events => (
                <EventCard 
                key={events.owner}
                owner={events.owner}
                date={events.date}
                startTime={events.startTime}
                endTime={events.endTime}
                location={events.location}
                name={events.name}
                friendsConfirmed={events.friendsConfirmed}
                friendsInvited={events.friendsInvited}
                />
            ))}
            </div>
            </div>
        </div>
    );
};

MyEvents.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            owner: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            startTime: PropTypes.string.isRequired,
            endTime: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
            friendsInvited: PropTypes.arrayOf(PropTypes.number)
        })
    )
}

export default MyEvents;