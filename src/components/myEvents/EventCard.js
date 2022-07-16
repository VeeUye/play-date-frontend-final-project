import React from "react";
import PropTypes from "prop-types";
import eventCardStyles from "./event-card.module.css";
import "./event-card.module.css";
import Button from "../atoms/button/Button";
import buttonStyles from "../atoms/button/button.module.css";
import { Icon } from "@iconify/react";

const EventCard = ( {eventData} ) => {
  const { date_start, date_end, location } = eventData;
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const d_start = new Date(date_start);
  const d_end = new Date(date_end);
  const d_start_date = d_start.getDate();
  const d_start_month = month[d_start.getMonth()];
  const d_start_hours = d_start.getHours();
  const d_start_minutes = d_start.getMinutes();
  const d_end_hours = d_end.getHours();
  const d_end_minutes = d_end.getMinutes();

  return (
    <div className={eventCardStyles.background}>
      <div className={eventCardStyles.details}>
        {/* <div className="owner">{owner}</div> */}
        {/* Commenting out current date as is not being passed correct format for date */}
        {/* <div className={eventCardStyles.date}>{date}</div> */}
        {/* comment end */}
        <div className={eventCardStyles.day}>{d_start_date}</div>
        <div className={eventCardStyles.month}>{d_start_month}</div>
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
            {d_start_hours}:{d_start_minutes} - {d_end_hours}:{d_end_minutes}
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
  eventData: PropTypes.shape({
    // owner: PropTypes.string.isRequired,
    date_start: PropTypes.string.isRequired,
    date_end: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // friendsConfirmed: PropTypes.arrayOf(PropTypes.string),
    // friendsInvited: PropTypes.arrayOf(PropTypes.string),
  })
};

export default EventCard;
