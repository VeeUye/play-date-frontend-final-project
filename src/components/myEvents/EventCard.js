import React from "react";
import PropTypes from "prop-types";
import eventCardStyles from "./event-card.module.css";
import "./event-card.module.css";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";
import { Icon } from "@iconify/react";

const EventCard = ({
  // owner,
  //   date,
  startTime,
  endTime,
  location,
  name,
  // friendsConfirmed,
  // friendsInvited
}) => {
  return (
    <div className={eventCardStyles.background}>
      <div className={eventCardStyles.details}>
        {/* <div className="owner">{owner}</div> */}
        {/* Commenting out current date as is not being passed correct format for date */}
        {/* <div className={eventCardStyles.date}>{date}</div> */}
        {/* comment end */}
        <div className={eventCardStyles.day}>08</div>
        <div className={eventCardStyles.month}>July</div>
        <div className={eventCardStyles.iconLocation}>
          <Icon
            className={eventCardStyles.icon}
            icon="carbon:location-filled"
          />
          <div className={eventCardStyles.location}>{location}</div>
        </div>
        <div className={eventCardStyles.iconTime}>
          <Icon className={eventCardStyles.icon} icon="bx:time-five" />
          <div className={eventCardStyles.startTime}>
            {startTime} - {endTime}
          </div>
        </div>
        <div className={eventCardStyles.iconName}>
          <Icon
            className={eventCardStyles.icon}
            icon="carbon:pedestrian-child"
          />
          <div className={eventCardStyles.name}>{name}</div>
        </div>
        {/* <div className="friends-confirmed">{friendsConfirmed}</div>
            <div className="friends-invited">{friendsInvited}</div> */}
      </div>
      <div className={eventCardStyles.buttons}>
        <Button className={buttonStyles.eventCard} label="Accept" />
        <Button className={buttonStyles.eventCard} label="Decline" />
      </div>
    </div>
  );
};

EventCard.propTypes = {
  owner: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
  friendsInvited: PropTypes.arrayOf(PropTypes.number),
};

export default EventCard;
