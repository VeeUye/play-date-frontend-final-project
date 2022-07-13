import axios from "axios";

import { BASE_URL, postEvent } from "../../requests/events/postEvent";

jest.mock("axios");

describe("postEvent", () => {
  describe("successful API call", () => {
    xit("should access the correct endpoint", async () => {
      axios.post.mockResolvedValue();
      await postEvent();
    });

    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/events`);
  });
});
