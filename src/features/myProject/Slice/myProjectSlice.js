import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMyproject } from "../../../api/myProjectApi";

export const fetchMyproject = createAsyncThunk(
  "projects/fetchProjects",
  async (sortBy = "") => {
    // console.log(sortBy);

    const response = await getMyproject(sortBy);
    return response.data;
  }
);

export const myprojectSlice = createSlice({
  name: "myproject",
  initialState: {
    projects: [],
    loading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMyproject.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchMyproject.fulfilled, (state, action) => {
        state.projects = action.payload;
      });
  },
});

export default myprojectSlice.reducer;
