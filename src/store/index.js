import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../features/board/card/Slice/cardSlice";
import workspaceReducer from "../features/workspace/Slice/workspaceSlice";
import boardReducer from "../features/board/board/Slice/boardSlice";
import taskReducer from "../features/board/task/Slice/taskSlice";
import authReducer from "../features/auth/Slice/authSlice";
import memberReducer from "../features/member/slice/memberSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    card: cardReducer,
    workspace: workspaceReducer,
    board: boardReducer,
    task: taskReducer,
  },
});

export default store;
