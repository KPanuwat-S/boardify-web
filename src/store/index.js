import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Slice/authSlice";
import cardReducer from "../features/board/card/Slice/cardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
  },
});

export default store;
