import axios from "./axios";

export const addTask = (cardId, task) =>
  axios.post(`boards/tasks/${cardId}`, task);

export const getOneTask = (taskId) => axios.get(`boards/tasks/${taskId}`);
export const getTask = () => axios.get(``);
export const editTask = (taskId, editData) =>
  axios.patch(`boards/tasks/${taskId}`, editData);
export const deleteTask = (id) => axios.delete(``);

export const addChecklist = (input) =>
  axios.post(`boards/tasks/checklists/`, input);
export const editChecklist = (editChecklist) =>
  axios.patch(`boards/tasks/checklists/`, editChecklist);

export const deleteChecklist = (checklistId) =>
  axios.delete(`boards/tasks/checklists/${checklistId}`);

export const addMeToTask = (data) =>
  axios.post(`boards/tasks/members/me`, data);

export const removeMeFromTask = (data) => {
  console.log("data in task api", data);
  return axios.delete(`boards/tasks/members/me/${data}`);
};

export const getAllMembersInTask = (data) =>
  axios.get(`boards/tasks/members/all/${data}`);
