import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const postEvent = async (fields, userIdToken, setAlert) => {

  try {
    const res = await axios.post(`${BASE_URL}/events`, fields, {
      headers: { Authorization: `Bearer ${userIdToken}` },
    });
    setAlert({
      message: "Event Created",
      isSuccess: true,
    });
    console.log(res);
    console.log(res.data);
  } catch (err) {
    setAlert({
      message: "Server Error. Please try again later",
      isSuccess: false,
    });
    console.log(err);
  }
};

export default postEvent;
