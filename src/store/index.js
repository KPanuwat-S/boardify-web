import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Slice/auth-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
