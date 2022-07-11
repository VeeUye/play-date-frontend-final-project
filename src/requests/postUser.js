import axios from "axios";

const postUser = (fields) => {
  axios
    .post(
      "http://localhost:5001/mc-play-date-scheduler/europe-west2/app/users",
      fields
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postUser;
