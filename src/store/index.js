import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
