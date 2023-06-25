import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as workspaceService from "../../../api/workspaceApi";
import { workspace } from "../../../mockdata";

const initialState = {
  workspaces: [],
  isLoading: false,
  error: null,
  members: [],
  oneWorkspace: null,
};

export const getAllWorkSpacesAsync = createAsyncThunk(
  "workspace/getAllWorkSpacesAsync",
  async (input, thunkApi) => {
    try {
      const res = await workspaceService.getWorkspace(input);

      return res.data.users;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getWorkspaceByIdAsync = createAsyncThunk(
  "workspace/getWorkspaceByIdAsync",
  async (input, thunkApi) => {
    try {
      const res = await workspaceService.getWorkspaceById(input);
      return res.data.workspace;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getWorkspaceMembersAsync = createAsyncThunk(
  "workspace/getWorkspaceMembersAsync",
  async (input, thunkApi) => {
    try {
      const res = await workspaceService.getWorkspaceMembers(input);
      return res.data.members;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    getWorkspaceById: (state, action) => {
      state.oneWorkspace = state.workspaces.find(
        (el) => el.workspaceId == action.payload
      );
      // console.log(
      //   state.workspaces.find((el) => el.Workspace.id == action.payload)
      // );
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getAllWorkSpacesAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllWorkSpacesAsync.fulfilled, (state, action) => {
        state.workspaces = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllWorkSpacesAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getWorkspaceMembersAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getWorkspaceMembersAsync.fulfilled, (state, action) => {
        state.members = action.payload;
        state.isLoading = false;
      })
      .addCase(getWorkspaceMembersAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getWorkspaceByIdAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getWorkspaceByIdAsync.fulfilled, (state, action) => {
        state.oneWorkspace = action.payload;
      })
      .addCase(getWorkspaceByIdAsync.rejected, (state, action) => {
        state.error = action.payload;
      }),
});
export const { getWorkspaceById } = workspaceSlice.actions;

export default workspaceSlice.reducer;
