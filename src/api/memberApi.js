import axios from "./axios";

export const searchUser = (value) =>
  axios.get("/member/searchUser/", { params: value });
export const searchAddMember = (value) =>
  axios.get("/member/searchAddMember", { params: value });
export const addMember = (value) => axios.post("/member/addMember", value);
export const getMemberWorkspace = (id) =>
  axios.get("/member/addMember", { params: id });
