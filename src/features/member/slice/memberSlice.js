import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as memberService from "../../../api/memberApi";

const initialState = {
  error: null,
  loading: false,
  userdata: [],
  memberdata: "",
  membercard: [],
  showmembercard: [],
  // countmember: {},
};

export const searchUser = createAsyncThunk(
  "member/searchUser",
  async (value, thunkApi) => {
    // console.log(value);
    try {
      const res = await memberService.searchUser(value);
      // console.log("kkkk", res.userdata);
      // console.log(res);
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const searchAddMember = createAsyncThunk(
  "member/searchAddMember",
  async (value, thunkApi) => {
    try {
      // console.log(value);
      const res = await memberService.searchAddMember(value);
      // console.log("sssss",res);
      // console.log(res.data);
      return res.data[0];
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const addMemberAsnyc = createAsyncThunk(
  "member/addMemberAsnyc",
  async (value, thunkApi) => {
    try {
      // console.log('addMember slice', value)
      const res = await memberService.addMember(value);
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getMemberAsync = createAsyncThunk(
  "member/getMemberAsync",
  async (id, thunkApi) => {
    try {
      // console.log(".......memberSlice", id);
      const res = await memberService.getMemberWorkspace(id);
      // console.log("....result : ", res);
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteMemberWorkspace = createAsyncThunk(
  "member/deleteMemberWorkspace",
  async (id, thunkApi) => {
    try {
      await memberService.deleteMemberWorkspace(id)
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
)

const memberSlice = createSlice({
  name: "member",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(searchUser.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        (state.userdata = action.payload), (state.loading = false);
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(searchAddMember.pending, (state) => {
        (state.error = null), (state.loading = true);
      })
      .addCase(searchAddMember.fulfilled, (state, action) => {
        (state.memberdata = action.payload), (state.loading = false);
      })
      .addCase(searchAddMember.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(addMemberAsnyc.fulfilled, (state, action) => {
        state.membercard = action.payload;
      })
      .addCase(getMemberAsync.fulfilled, (state, action) => {
        state.showmembercard = action.payload;
      })
      // .addCase(countMemberOnBoard.fulfilled, (state, action) => {
      //   state.countmember = action.payload;
      // }),
});

export default memberSlice.reducer;
