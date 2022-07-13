import axios from "axios";

const BASE_URL =
  "http://localhost:5001/mc-play-date-scheduler/europe-west2/app";

const postProfile = async (fields, setAlert) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, fields);
    setAlert({
      message: "Profile Created",
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

export default postProfile;
