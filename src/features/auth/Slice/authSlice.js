import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { setAccessToken, removeAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      console.log("---------", input);
      const res = await authService.register(input);
      // setAccessToken(res.data.accessToken);
      // const fetchMe = await authService.fetchProfile();

      // return fetchMe.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
  try {
    console.log(input);
    const res = await authService.login(input);
    setAccessToken(res.data.accessToken);
    const resFetchMe = await authService.fetchMe();
    return resFetchMe.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (input, thunkApi) => {
    console.log("google login", input);

    try {
      const res = await authService.gLogin({ data: input });
      console.log("res.data", res.data);
      setAccessToken(res.data.accessToken);
      const resFetchMe = await authService.fetchMe();
      return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  removeAccessToken();
});

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const res = await authService.fetchMe();
    return res.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) =>
    builder

      .addCase(login.pending, (state, action) => {
        state.initialLoading = true;
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.initialLoading = false;
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = action.payload;
        state.initialLoading = false;
      })
      .addCase(googleLogin.pending, (state, action) => {
        state.isAuthenticated = false;
        state.loading = true;
        state.user = action.payload;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.initialLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.initialLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(fetchMe.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      }),
});

export default authSlice.reducer;
