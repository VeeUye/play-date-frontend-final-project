import axios from "axios";

const BASE_URL =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const getMyProfile = async (userId, userIdToken) => {
  if (userId && userIdToken) {
    return axios
      .get(`${BASE_URL}/users/${userId}`, {
        headers: { Authorization: `Bearer ${userIdToken}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        // setAlert({
        //     message: "Server Error. Could not fetch user data",
        //     isSuccess: false,
        // });
        console.log(err);
      });
  }
};

export default getMyProfile;
