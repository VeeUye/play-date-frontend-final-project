import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const editProfile = async (fields, userIdToken, userId) => {
  const tokenResult = await userIdToken;

  try {
    const res = await axios.put(`${BASE_URL}/users/${userId}`, fields, {
      headers: { Authorization: `Bearer ${tokenResult}` },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default editProfile;
