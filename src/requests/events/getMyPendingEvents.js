import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const getMyPendingEvents = async (setEvents, user, userIdToken) => {
  if (user && userIdToken) {
    return axios
      .get(`${BASE_URL}/events/user-events/${user}/pending`, {
        headers: { Authorization: `Bearer ${userIdToken}` },
      })
      .then((res) => {
        setEvents(res.data);
        return(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getMyPendingEvents;
