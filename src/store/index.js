import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Slice/authSlice";
import memberReducer from "../features/member/slice/memberSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
  },
});

export default store;
