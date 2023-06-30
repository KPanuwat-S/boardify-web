import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Slice/authSlice";
import cardReducer from "../features/board/card/Slice/cardSlice";
import workspaceReducer from "../features/workspace/Slice/workspaceSlice";
import projectsReducer from "../features/myproject/Slice/myprojectSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
    workspace: workspaceReducer,
    projects: projectsReducer,
  },
});

export default store;
