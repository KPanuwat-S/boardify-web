import axios from "./axios";

// CRidD Task
export const addTask = (cardId, task) =>
  axios.post(`boards/tasks/task/${cardId}`, task);
export const getOneTask = (taskId) => axios.get(`boards/tasks/${taskId}`);
export const getTask = () => axios.get(``);
export const editTask = (taskId, editData) =>
  axios.patch(`boards/tasks/${taskId}`, editData);
export const deleteTask = (id) => axios.delete(`boards/tasks/${id}`);

// Checklist
export const addChecklist = (input) =>
  axios.post(`boards/tasks/checklists/`, input);
export const editChecklist = (editChecklist) =>
  axios.patch(`boards/tasks/checklists/`, editChecklist);
export const deleteChecklist = (checklistId) =>
  axios.delete(`boards/tasks/checklists/${checklistId}`);

// Membership
export const addMeToTask = (input) =>
  axios.post(`boards/tasks/members/me`, input);
export const removeMeFromTask = (input) =>
  axios.delete(`boards/tasks/members/me/${input}`);
export const addMemberToTask = (input) =>
  axios.post(`boards/tasks/members/member`, input);
export const getAllMembersInTask = (input) =>
  axios.get(`boards/tasks/members/all/${input}`);

// Comment
export const addComment = (input) => axios.post(`boards/tasks/comments`, input);
export const editComment = (input) =>
  axios.patch(`boards/tasks/comments`, input);
export const deleteComment = (id) =>
  axios.delete(`boards/tasks/comments/${id}`);
