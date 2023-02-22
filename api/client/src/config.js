import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://covid-stories.onrender.com/api/",
});
