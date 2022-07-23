/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import eventCardStyles from "./event-card.module.css";
import "./event-card.module.css";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";
import { Icon } from "@iconify/react";

const EventCard = ({
  eventData,
  userId,
  setAcceptedResponse,
  setDeclinedResponse,
}) => {
  const { date_start, date_end, description, location, name} = eventData;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d_start = new Date(date_start);
  const d_end = new Date(date_end);
  const dateStart = {
    date: (d_start.getUTCDate() <10) ? `0${d_start.getUTCDate()}` : `${d_start.getUTCDate()}`,
    month: d_start.getUTCMonth(),
    hours: (d_start.getUTCHours() <10) ? `0${d_start.getUTCHours()}` : `${d_start.getUTCHours()}`,
    minutes: (d_start.getUTCMinutes() < 10) ? (`0${d_start.getUTCMinutes()}`) : (`${d_start.getUTCMinutes()}`),  
  };
  const dateEnd = {
    hours: (d_end.getUTCHours() <10) ? `0${d_end.getUTCHours()}` : `${d_end.getUTCHours()}`,
    minutes: (d_end.getUTCMinutes() < 10) ? (`0${d_end.getUTCMinutes()}`) : (`${d_end.getUTCMinutes()}`),
  };

  const handleAcceptInvite = () => {
    setAcceptedResponse({
      ["eventId"]: eventData.id,
      ["userId"]: userId,
    });
  };

  const handleDeclineInvite = () => {
    setDeclinedResponse({
      ["eventId"]: eventData.id,
      ["userId"]: userId,
    });
  };

  return (
    <div className={eventCardStyles.background}>
      <div className={eventCardStyles.details}>
        {/* <div className="owner">{owner}</div> */}
        {/* Commenting out current date as is not being passed correct format for date */}
        {/* <div className={eventCardStyles.date}>{date}</div> */}
        {/* comment end */}
        <div className={eventCardStyles.date}>
        <div className={eventCardStyles.day}>{dateStart.date}</div>
        <div className={eventCardStyles.month}>{month[dateStart.month]}</div>
        </div>
        <div className={eventCardStyles.name}>{name}</div>
        <div className={eventCardStyles.description}>{description}</div>
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
            {dateStart.hours}:{dateStart.minutes} - {dateEnd.hours}:
            {dateEnd.minutes}
          </div>
        </div>
        {/* <div className={eventCardStyles.iconName}>
          <Icon
            className={eventCardStyles.icon}
            icon="carbon:pedestrian-child"
          />
        </div> */}
        {/* <div className="friends-confirmed">{friendsConfirmed}</div>
            <div className="friends-invited">{friendsInvited}</div> */}
      </div>
      <div className={eventCardStyles.buttons}>
        <Button
          className={buttonStyles.eventCard}
          onClick={handleAcceptInvite}
          label="Accept"
        />
        <Button
          className={buttonStyles.eventCard}
          onClick={handleDeclineInvite}
          label="Decline"
        />
      </div>
    </div>
  );
};

EventCard.propTypes = {
  eventData: PropTypes.shape({
    // owner: PropTypes.string.isRequired,
    date_start: PropTypes.string.isRequired,
    date_end: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // friendsConfirmed: PropTypes.arrayOf(PropTypes.string),
    // friendsInvited: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default EventCard;
