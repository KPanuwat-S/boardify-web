import axios from "axios";

export const getMyproject = (sortBy) =>
  axios.get(`/myprofile/project`, { params: { sortBy } });
