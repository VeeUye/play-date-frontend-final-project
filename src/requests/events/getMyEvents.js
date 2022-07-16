import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const getMyEvents = async(user, userIdToken) => {
    
    return axios
    .get(`${BASE_URL}/events/user-events/${user}/friends`, {
      headers: { Authorization: `Bearer ${userIdToken}` },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getMyEvents
