import axios from "axios";

// Current erroring with bad request. Need to match req data with main

const getUserFriends = (user) => {
  return axios
    .get(
      `http://localhost:5001/mc-play-date-scheduler/europe-west2/app/users/${user}/friends`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUserFriends;
