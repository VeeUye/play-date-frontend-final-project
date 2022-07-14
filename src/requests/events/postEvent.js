import axios from "axios";

export const BASE_URL =
  "http://localhost:5001/mc-play-date-scheduler/europe-west2/app";

const postEvent = async (fields, setAlert) => {
  try {
    const res = await axios.post(`${BASE_URL}/events`, fields);
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
