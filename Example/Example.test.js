const axios = require("axios");
const fetchData = require("./Example");


jest.mock("axios", () => {
  return {
    get: jest.fn(),
    post: jest.fn(),
  };
});

const axiosMock = axios;

describe("fetchData", () => {
  it("fetches successfully", async () => {
    const responseData = {data: {foo: "bar" }}
    axiosMock.get.mockImplementationOnce(()=>responseData)
    const data = await fetchData();

    expect(data).toEqual(responseData.data);
    expect(axios.get).toHaveBeenCalledWith("https://api.example.com/data");
  });

  it("handles error", async () => {
    const errorMessage = "Failed to fetch data";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchData()).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith("https://api.example.com/data");
  });
});
