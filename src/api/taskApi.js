import axios from "./axios";

export const addTask = () => axios.post(``);
export const getOneTask = (taskId) => axios.get(`boards/tasks/${taskId}`);
export const getTask = () => axios.get(``);
export const editTask = (taskId, editData) =>
  axios.patch(`boards/tasks/${taskId}`, editData);
export const deleteTask = () => axios.delete(``);

export const addChecklist = (input) =>
  axios.post(`boards/tasks/checklists/`, input);
export const editChecklist = (editChecklist) =>
  axios.patch(`boards/tasks/checklists/`, editChecklist);
