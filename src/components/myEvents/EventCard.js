import React from "react";
import PropTypes from "prop-types";
import eventCardStyles from "./event-card.module.css";
import "./event-card.module.css"

const EventCard = ({
    owner,
    date,
    location,
    description,
    friendsConfirmed,
    friendsInvited
}) => {
    return (
        <div className={eventCardStyles.background}>
            <div className="owner">{owner}</div>
            <div className="date">{date}</div>
            <div className="location">{location}</div>
            <div className="description">{description}</div>
            <div className="friends-confirmed">{friendsConfirmed}</div>
            <div className="friends-invited">{friendsInvited}</div>
        </div>
    );
};

EventCard.propTypes = {
    owner: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
    friendsInvited: PropTypes.arrayOf(PropTypes.number)
};

export default EventCard;
