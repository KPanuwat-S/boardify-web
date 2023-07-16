import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as taskService from "../../../../api/taskApi";

const initialState = {
  taskItem: null,
  isLoading: false,
  error: null,
  checklist: [],
  membersInTask: [],
};

// READ

export const getOneTaskAsync = createAsyncThunk(
  "task/getTaskAsync",
  async (input, thunkApi) => {
    try {
      console.log("---input", input);
      const res = await taskService.getOneTask(input);
      console.log("res.data", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addTaskAsync = createAsyncThunk(
  "task/addTaskAsync",
  async (input, thunkApi) => {
    try {
      const res = await taskService.addTask(input.cardId, input.task);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const editTaskAsync = createAsyncThunk(
  "task/editTaskAsync",
  async (input, thunkApi) => {
    try {
      const res = await taskService.editTask(input.id, input.data);
      console.log("editTaskAsync fn running");
      console.log("res in edittask async fn", res);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "task/deleteTaskAsync",
  async (input, thunkApi) => {
    try {
      await taskService.deleteTask(input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

// export const deleteCardAsync

export const addChecklistAsync = createAsyncThunk(
  "task/addChecklistAsync",
  async (input, thunkApi) => {
    try {
      await taskService.addChecklist(input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const editChecklistAsync = createAsyncThunk(
  "task/editChecklistAsync",
  async (input, thunkApi) => {
    try {
      await taskService.editChecklist(input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const deleteChecklistAsync = createAsyncThunk(
  "task/deleteChecklistAsync",
  async (input, thunkApi) => {
    try {
      await taskService.deleteChecklist(input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addMeToTaskAsync = createAsyncThunk(
  "task/addMemberToTaskAsync",
  async (input, thunkApi) => {
    try {
      const res = await taskService.addMeToTask(input);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getMemberInTaskAsync = createAsyncThunk(
  "task/getMemberInTaskAsync",
  async (input, thunkApi) => {
    try {
      const res = await taskService.getAllMembersInTask(input);
      console.log("res get member", res);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const removeMeFromTaskAsync = createAsyncThunk(
  "task/removeMeFromTaskAsync",
  async (input, thunkApi) => {
    try {
      await taskService.removeMeFromTask(input);
      // return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    editTask: (state, action) => {
      console.log("taskSlice", action.payload);
      state.taskItem = action.payload;
    },
    getChecklist: (state, action) => {
      state.checklist = state.taskItem.ChecklistItems;
    },
    addChecklist: (state, action) => {
      state.checklist.push(action.payload);
    },
    removeTaskItem: (state, action) => {
      state.taskItem = {};
    },
    removeMeFromTask: (state, action) => {
      console.log("action", action.payload);
      state.membersInTask = state.membersInTask.filter(
        (el) => el.userId !== action.payload
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getOneTaskAsync.pending, (state, action) => {
        state.isLoading = true;
        state.taskItem = {};
      })
      .addCase(getOneTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.taskItem = action.payload;
      })
      .addCase(getOneTaskAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTaskAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.taskItem = action.payload;
      })
      .addCase(editTaskAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addChecklistAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addChecklistAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addChecklistAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editChecklistAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteChecklistAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addMeToTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getMemberInTaskAsync.fulfilled, (state, action) => {
        state.membersInTask = action.payload;
      })
      .addCase(removeMeFromTaskAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      }),
});
export const {
  removeMeFromTask,
  editTask,
  removeTaskItem,
  getChecklist,
  addChecklist,
} = taskSlice.actions;

export default taskSlice.reducer;
