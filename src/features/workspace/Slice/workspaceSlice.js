import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as workspaceService from "../../../api/workspaceApi";

const initialState = {
  workspaces: [],
  isLoading: false,
  error: null,
  members: [],
  oneWorkspace: null,
  countmember: [],
};

export const getAllWorkSpacesAsync = createAsyncThunk(
  "workspace/getAllWorkSpacesAsync",
  async (input, thunkApi) => {
    console.log(input);
    try {
      const res = await workspaceService.getWorkspace(input);
      // console.log("get all workspaces", res.data);
      return res.data;
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
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getWorkspaceMembersAsync = createAsyncThunk(
  "workspace/getWorkspaceMembersAsync",
  async (input, thunkApi) => {
    try {
      // console.log("====== input :", input);
      const res = await workspaceService.getWorkspaceMembers(input);
      // console.log("-------- res :",res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createWorkspaceAndInviteMember = createAsyncThunk(
  "workspace/createWorkspaceAndInviteMember",
  async (input, thunkApi) => {
    try {
      // console.log("input in wp slice", input);
      const res = await workspaceService.createWorkspaces(input);
      return res.data;
    } catch (err) {}
  }
);

export const countMemberWorkspace = createAsyncThunk(
  "workspace/countMemberWorkspace",
  async (id, thunkApi) => {
    try {
      // console.log("+++++ id : ", id);
      const res = await workspaceService.countMemberWorkspace(id);
      // console.log("--------count", res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const editWorkspaceNameAsync = createAsyncThunk(
  "workspace/editWorkspaceNameAsync",
  async (input, thunkApi) => {
    try {
      console.log("input in edit workspace name", input);
      const res = await workspaceService.editWorkspaceName(
        input.workspaceId,
        input.workspaceName
      );
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
      })
      .addCase(createWorkspaceAndInviteMember.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(countMemberWorkspace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(countMemberWorkspace.fulfilled, (state, action) => {
        state.countmember.push(action.payload);
      })
      .addCase(countMemberWorkspace.rejected, (state, action) => {
        state.error = action.payload;
      }),
});
export const { getWorkspaceById } = workspaceSlice.actions;

export default workspaceSlice.reducer;
