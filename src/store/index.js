import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../features/board/card/Slice/cardSlice";
import workspaceReducer from "../features/workspace/Slice/workspaceSlice";
import boardReducer from "../features/board/board/Slice/boardSlice";
import taskReducer from "../features/board/task/Slice/taskSlice";
import memberReducer from "../features/member/slice/memberSlice";
import projectsReducer from "../features/myProject/Slice/myProjectSlice";
import stripeReducer from "../features/stripe/Slice/purchaseSlice";

import authReducer from "../features/auth/Slice/authSlice";
import memberReducer from "../features/member/slice/memberSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    card: cardReducer,
    member: memberReducer,
    workspace: workspaceReducer,
    board: boardReducer,
    task: taskReducer,
    projects: projectsReducer,
    stripe: stripeReducer,
  },
});

export default store;
