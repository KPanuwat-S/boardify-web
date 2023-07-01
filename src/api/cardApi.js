import axios from "./axios";

export const getAllCards = (id) => axios.get(`/boards/cards/${id}`);
// get all cards = object.cards

export const addCard = (data, boardId) =>
  axios.post(`/boards/cards/${boardId}`, data);
export const updateCardsByName = (data, boardId) =>
  axios.patch(`/boards/cardsDnD/${boardId}`, data);
export const updateCards = (data, boardId) =>
  axios.patch(`/boards/cardsDnD/${boardId}`, data);
export const updateTasks = (data, boardId) =>
  axios.patch(`/boards/tasksDnD/${boardId}`, data);
