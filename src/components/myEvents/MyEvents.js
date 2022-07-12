import React from "react";
import PropTypes from "prop-types";
import EventCard from "./EventCard";
import myEventsStyles from "./my-events.module.css";
import SmallTitle from "../atoms/small-title/SmallTitle";
import titleStyles from "../atoms/small-title/small-title.module.css";
import "./my-events.module.css";

const MyEvents = ({ events }) => {
    return (
        <div className={myEventsStyles.background}>
             <SmallTitle className={titleStyles.myEvents} text="My Events" />
            {events.map(events => (
                <EventCard 
                key={events.owner}
                owner={events.owner}
                date={events.date}
                location={events.location}
                description={events.description}
                friendsConfirmed={events.friendsConfirmed}
                friendsInvited={events.friendsInvited}
                />
            ))}
        </div>
    );
};

MyEvents.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            owner: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
            friendsInvited: PropTypes.arrayOf(PropTypes.number)
        })
    )
}

export default MyEvents;