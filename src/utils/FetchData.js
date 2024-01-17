const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    //     part: "snippet",
    //     videoId: "M7FIvfx5J10",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "3d2500074cmsh6e9b0e1f526758fp170a2djsn18f6cda179e1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
