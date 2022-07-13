import axios from "axios";

// need userID to complete

const BASE_URL =
  "http://localhost:5001/mc-play-date-scheduler/europe-west2/app";

const editProfile = async (fields) => {
  try {
    const res = await axios.put(`${BASE_URL}/users/${userId}`, fields);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default editProfile;
