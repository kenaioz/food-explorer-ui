import axios from "axios";

const api = axios.create({
  baseURL: "https://food-explorer-api-ihgd.onrender.com",
});

const createSession = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error - Response:", error.response.data.message);
  } else if (error.request) {
    console.error("API Error - No Response:", error.request);
  } else {
    console.error("API Error:", error.message);
  }
  throw error;
};

export { api, createSession, handleApiError };
