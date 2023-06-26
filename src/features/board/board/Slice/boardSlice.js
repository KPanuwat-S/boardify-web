import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: null,
  // one baord that shows how many cards and how many task in one card
  isLoading: false,
  error: null,
  members: [],
  cards: [],
  oneTask: null,
};

// Create
export const createBoardAsync = createAsyncThunk(
  "board/createBoardAsync",
  async (input, thunkApi) => {
    const res = await boardService.createBoard(input);
    return res.data;
    try {
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

// Read
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
      const res = await boardService.getTaskByIdAsync(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const cardSlice = createSlice({
  name: "board",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
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
      }),
});

// export const { addCard } = cardSlice.actions;
// export default cardSlice.reducer;
