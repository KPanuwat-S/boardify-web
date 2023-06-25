import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  workspaces: [],
  isLoading: false,
};

export const getWorkspacesAsync = createAsyncThunk(
  "workspace/getWorkspacesAsync",
  async (input, thunkApi) => {
    // try {
    //   const res = await
    // } catch (err) {
    //   console.log(err);
    // }
  }
);
