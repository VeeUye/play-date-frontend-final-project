import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const acceptEvent = async (fields, userIdToken) => {
  if (fields && userIdToken) {
    try {
      const res = await axios.put(
        `${BASE_URL}/events/user-events/accept`,
        fields,
        {
          headers: { Authorization: `Bearer ${userIdToken}` },
        }
      );
      // setAlert({
      //   message: "Profile Updated",
      //   isSuccess: true,
      // });
      console.log(res);
    } catch (err) {
      //   setAlert({
      //     message: "Server Error. Please try again later",
      //     isSuccess: false,
      //   });
      console.log(err);
    }
  }
};

export default acceptEvent;
