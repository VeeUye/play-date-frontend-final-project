import React from "react";
import SmallTitle from "../atoms/small-title/SmallTitle";

import "./create-event.module.css";

const CreateEvent = (props) => {
  return (
    <div className="background">
      <SmallTitle className="create-event__title--white" text="Create Event" />
    </div>
  );
};

export default CreateEvent;
