import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as boardService from "../../../../api/boardApi";

const initialState = {
  board: null,
  boards: [],
  isLoading: false,
  error: null,
};

// Create
export const createBoardAsync = createAsyncThunk(
  "board/createBoardAsync",
  async (input, thunkApi) => {
    try {
      const res = await boardService.createBoard(input);
      console.log("createboard async");
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

// Read
export const getAllBoardsInWorkspaceAsync = createAsyncThunk(
  "board/getAllBoardsInWorkspaceAsync",
  async (input, thunkApi) => {
    try {
      const res = await boardService.getAllBoardsById(input);
      console.log("res", res);
      return res.data.payload;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const getBoardByIdAsync = createAsyncThunk(
  //get board by id async
  "board/getBoardAsync",
  async (input, thunkApi) => {
    try {
      const res = await boardService.getBoardById(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getOneBoardAsync = createAsyncThunk(
  "board/getOneBoardAsync",
  async (input, thunkApi) => {
    try {
      const res = await boardService.getOneBoard(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getAllCardsInBoardAsync = createAsyncThunk(
  //get all cards in board
  "board/getAllCardsInBoardAsync",
  async (input, thunkApi) => {
    try {
      const res = await boardService.getAllCardsInBoard(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const getTaskByIdAsync = createAsyncThunk(
  //get task detail
  "board/getTaskByIdAsync",
  async (input, thunkApi) => {
    try {
      const res = await boardService.getTaskById(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

// export const editBoardNameAsync = createAsyncThunk(
//   "board/editBoardNameAsync",
//   async (input, thunkApi) => {
//     try {
//       const res = await boardService.
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.response.data.message);
//     }
//   }
// );

export const deleteboard = createAsyncThunk(
  "board/deleteboard",
  async (id, thunkApi) => {
    try {
      console.log("hhhh", id);
      await boardService.deleteBoard(id);
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(createBoardAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createBoardAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards.unshift(action.payload);
      })
      .addCase(createBoardAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllBoardsInWorkspaceAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBoardsInWorkspaceAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = action.payload;
      })
      
      .addCase(getAllBoardsInWorkspaceAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getBoardByIdAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBoardByIdAsync.fulfilled, (state, action) => {
        state.board = action.payload;
        state.isLoading = false;
      })
      .addCase(getBoardByIdAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOneBoardAsync.fulfilled, (state, action) => {
        state.board = action.payload;
      }),
  // .addCase(deleteboard.fulfilled, (state, action) => {
  //   state.error = action.payload;
  // })
});

// export const { addCard } = cardSlice.actions;
export default boardSlice.reducer;
