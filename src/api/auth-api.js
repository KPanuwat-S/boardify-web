import axios from "./axios";

<<<<<<< HEAD
export const register = (input) => axios.post("auth/register", input);
// export const register = input => axios.post('/auth/register', input);
=======
export const register = (input) => axios.post("/auth/register", input);
>>>>>>> 84009d0dce8e726911707144f115015cc7a11cd7
export const login = (input) => axios.post("/auth/login", input);
export const fetchMe = () => axios.get("/auth/me");

export const gLogin = (input) => axios.post("/auth/googleLogin", input);
