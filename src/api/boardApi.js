import axios from "./axios";

export const createBoard = (data) => axios.post(`/boards`, data);

export const editBoardName = (boardId, boardName) => axios.patch(`/boards/board`);

export const getBoardById = (boardId) => axios.get(`/workspaces/${userId}`);

export const getOneBoard = (id) => axios.get(`/boards/board/${id}`);

export const getAllCardsInBoard = (boardId) =>
  axios.get(`/workspaces/members/${workspaceId}`);

export const getTaskById = (taskId) =>
  axios.get(`/workspaces/workspace/${workspaceId}`);

export const getAllBoardsById = (workspaceId) =>
  axios.get(`/boards/${workspaceId}`);

export const deleteBoard = (id) => axios.delete(`/boards/deleteboard/${id}`)