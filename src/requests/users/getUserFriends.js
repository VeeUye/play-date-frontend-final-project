import axios from "axios";

// Current erroring with bad request. Need to match req data with main
const BASE_URL =
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const getUserFriends = (user) => {
  return axios
    .get(`${BASE_URL}/${user}/friends`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUserFriends;
