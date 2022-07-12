import React from "react";
import PropTypes from "prop-types";
import eventCardStyles from "./event-card.module.css";
import "./event-card.module.css"

const EventCard = ({
    // owner,
    date,
    startTime,
    location,
    name,
    // friendsConfirmed,
    // friendsInvited
}) => {
    return (
        <div className={eventCardStyles.background}>
            {/* <div className="owner">{owner}</div> */}
            <div className={eventCardStyles.date}>{date}</div>
            <div className={eventCardStyles.location}>{location}</div>
            <div className={eventCardStyles.startTime}>{startTime}</div>
            <div className={eventCardStyles.name}>{name}</div>
            {/* <div className="friends-confirmed">{friendsConfirmed}</div>
            <div className="friends-invited">{friendsInvited}</div> */}
        </div>
    );
};

EventCard.propTypes = {
    owner: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
    friendsInvited: PropTypes.arrayOf(PropTypes.number)
};

export default EventCard;
