import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8888",
});

export const createCard = (input) => {
  return authApi.post("/card/createCard ", input);
};
