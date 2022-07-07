import React from "react";
import SmallTitle from "../atoms/small-title/SmallTitle";
import CreateEventForm from "./CreateEventForm";
import Image from "../../assets/images/float.svg";
import createEventStyles from "../create-event/create-event.module.css";
import titleStyles from "../atoms/small-title/small-title.module.css";

import "./create-event.module.css";

const CreateEvent = () => {
  return (
    <div className="background">
      <SmallTitle className={titleStyles.default} text="Create Event" />
      <CreateEventForm />
      <img className={createEventStyles.img} src={Image} alt="girl floating" />
    </div>
  );
};

export default CreateEvent;
