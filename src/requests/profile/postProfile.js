import axios from "axios";

const BASE_URL =
  "http://localhost:5001/mc-play-date-scheduler/europe-west2/app";

const postProfile = async (fields) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, fields);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default postProfile;
