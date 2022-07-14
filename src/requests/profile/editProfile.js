import axios from "axios";

// user needs to be passed in from EditProfile component (not yet built)

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FIRESTORE_URL ||
  "https://europe-west2-mc-play-date-scheduler.cloudfunctions.net/app";

const editProfile = async (fields, userIdToken, userId) => {
  const tokenResult = await userIdToken;

  // const user = fields.userId;
  // console.log(fields.userId);
  console.log(userId);
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
