import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Slice/authSlice";
import cardReducer from "../features/board/card/Slice/cardSlice";
import workspaceReducer from "../features/workspace/Slice/workspaceSlice";
import boardReducer from "../features/board/board/Slice/boardSlice";
import taskReducer from "../features/board/task/Slice/taskSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
    workspace: workspaceReducer,
    board: boardReducer,
    task: taskReducer,
  },
});

export default store;
