import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeAccessToken, setAccessToken } from "../../../util/localstorage";
import * as authService from "../../../api/auth-api";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    console.log(input);
    try {
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
      const fetchMe = await authService.fetchProfile();
      return fetchMe.data.user;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // signOut: (state, action) => {
    //   state.isAuthenticated = false;
    //   state.isAdmin = false;
    //   removeAccessToken();
    // },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default authSlice.reducer;
