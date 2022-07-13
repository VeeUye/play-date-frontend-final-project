import axios from "axios";

export const BASE_URL =
  "http://localhost:5001/mc-play-date-scheduler/europe-west2/app/";

const postEvent = async (fields) => {
  try {
    const res = await axios.post(`${BASE_URL}/events`, fields);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export default postEvent;
