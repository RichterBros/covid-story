import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://covid-story.herokuapp.com/api/",
});
