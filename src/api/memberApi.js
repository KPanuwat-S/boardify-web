import axios from "../api/axios";

export const searchUser = (value) =>
  axios.get("/member/searchUser/", { params: value });
export const searchAddMember = (value) =>
  axios.get("/member/searchAddMember/", { params: value });
export const addMember = (value) => axios.post("/member/addMember", value);
export const deleteMemberWorkspace = (id) =>
  axios.delete("/member/deleteWorkspaceMember/", { params: id });
export const getMemberRole = (id) =>
  axios.get("/member/getMemberRole/", { params: id });
export const getMemberWorkspace = (id) =>
  axios.get(`/member/getWorkspaceMember/${id}`);
