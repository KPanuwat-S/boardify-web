import axios from "axios";

export const getMyproject = (sortBy) =>
  axios.get(`/myprofile/project?sortBy=${sortBy}`);
