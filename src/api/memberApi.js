import axios from "../api/axios";

export const searchUser = (value) => axios.get("/member/searchUser/", { params: value });
export const searchAddMember = (value) => axios.get("/member/searchAddMember", {params: value})
export const addMember = (value) => axios.post("/member/addMember", value)
