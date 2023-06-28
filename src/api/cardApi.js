import axios from "./axios";

export const getAllCards = (id) => axios.get(`/boards/cards/${id}`);
// get all cards = object.cards

export const addCard = (data, boardId) =>
  axios.post(`/boards/cards/${boardId}`, data);
