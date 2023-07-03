import axios from "./axios";

export const getMyproject = (sortBy) =>
  axios.get(`/myProfile/project?sortBy=${sortBy}`);
