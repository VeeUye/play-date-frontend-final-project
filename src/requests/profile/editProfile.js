import axios from "axios";

// user needs to be passed in from EditProfile component (not yet built)

const BASE_URL =
  "http://localhost:5001/mc-play-date-scheduler/europe-west2/app";

const editProfile = async (fields, user) => {
  try {
    const res = await axios.put(`${BASE_URL}/users/${user}`, fields);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default editProfile;
