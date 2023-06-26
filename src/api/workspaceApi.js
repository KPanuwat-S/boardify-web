import axios from "./axios";

export const getWorkspace = (userId) => axios.get(`/workspaces/${userId}`);

export const getWorkspaceMembers = (workspaceId) =>
  axios.get(`/workspaces/members/${workspaceId}`);

export const getWorkspaceById = (workspaceId) =>
  axios.get(`/workspaces/workspace/${workspaceId}`);

export const deleteWorkspace = (workspaceId)=> axios.get(``)
// export const login = (input) => axios.post("/auth/login", input);
// export const fetchMe = () => axios.get("/auth/me");
// export const gLogin = (input) => axios.post("/auth/googleLogin", input);
