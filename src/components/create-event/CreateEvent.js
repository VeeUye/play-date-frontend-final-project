import React from "react";
import SmallTitle from "../atoms/small-title/SmallTitle";
import titleStyles from "../atoms/small-title/small-title.module.css";

import "./create-event.module.css";

const CreateEvent = (props) => {
  return (
    <div className="background">
      <SmallTitle className={titleStyles.default} text="Create Event" />
    </div>
  );
};

export default CreateEvent;
