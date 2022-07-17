import React from "react";
import screenSize from "../../functions/screenSize";
import SmallTitle from "../atoms/small-title/SmallTitle";
import CreateEventForm from "./CreateEventForm";
import Image from "../../assets/images/float.svg";
import createEventStyles from "../create-event/create-event.module.css";
import titleStyles from "../atoms/small-title/small-title.module.css";
import { UserAuth } from "../../contexts/AuthContext";
import LoadSpinner from "../load-spinner/LoadSpinner";
import "./create-event.module.css";

const CreateEvent = () => {
  const isSmall = screenSize();

  const { user, token } = UserAuth();

  return (
    <>
      {!user || !token ? (
        <LoadSpinner />
      ) : (
        <div
          className={
            isSmall
              ? createEventStyles.smallScreen
              : createEventStyles.bigScreen
          }
        >
          <div className="background">
            <SmallTitle className={titleStyles.default} text="Create Event" />
            <CreateEventForm user={user} token={token} />
            <img
              className={createEventStyles.img}
              src={Image}
              alt="girl floating"
            />
          </div>
          <img
            className={createEventStyles.img2}
            src={Image}
            alt="girl floating"
          />
        </div>
      )}
    </>
  );
};

export default CreateEvent;
