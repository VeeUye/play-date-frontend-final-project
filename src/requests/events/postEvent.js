import axios from "axios";

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
