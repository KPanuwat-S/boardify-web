import axios from "./axios";

export const createCheckout = (input) => axios.post("/stripe/checkout", input);
export const createPayment = (id) =>
  axios.get("/stripe/payment?session_id=" + id);
