import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as taskService from "../../../../api/taskApi";

const initialState = {
  taskItem: null,
  isLoading: false,
  error: null,
};

// READ
export const getOneTaskAsync = createAsyncThunk(
  "task/getTaskAsync",
  async (input, thunkApi) => {
    try {
      const res = await taskService.getOneTask(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addTaskAsync = createAsyncThunk(
  "task/addTaskAsync",
  async (input, thunkApi) => {
    try {
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const editTaskAsync = createAsyncThunk(
  "task/editTaskAsync",
  async (input, thunkApi) => {
    try {
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "task/deleteTaskAsync",
  async (input, thunkApi) => {
    try {
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    editTask: (state, action) => {
      state.taskItem = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getOneTaskAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOneTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.taskItem = action.payload;
      })
      .addCase(getOneTaskAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTaskAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.taskItem 
      }),
});
