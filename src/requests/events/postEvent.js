import axios from "axios";

// Current erroring with bad request. Need to match req data with main

const postEvent = (fields) => {
  axios
    .post(
      "http://localhost:5001/mc-play-date-scheduler/europe-west2/app/events",
      fields
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postEvent;
