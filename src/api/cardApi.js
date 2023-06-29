import axios from "./axios";

export const getAllCards = (input) => axios.get(`boards/cards/${input}`);
