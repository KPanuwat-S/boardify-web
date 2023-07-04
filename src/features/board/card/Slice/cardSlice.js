import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as cardService from "../../../../api/cardApi";
const initialState = {
  cardItems: [],
  dashBoard: [],
  isLoading: false,
  error: null,
};

export const getAllCardsInOneBoardAsync = createAsyncThunk(
  "card/getAllCardsInOneBoardAsync",
  async (input, thunkApi) => {
    try {
      const res = await cardService.getAllCards(input);
      // console.log("getAllCardsInOneBoardAsync", res);
      return res.data[0].cards;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const getDashBoardAsync = createAsyncThunk(
  "card/getdashBoardAsync",
  async (input, thunkApi) => {
    try {
      const res = await cardService.getAllDashBoard(input);
      console.log("getAllCardsInOneBoardAsync", res);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const addCardAsync = createAsyncThunk(
  "card/createCardAsync",
  async (input, thunkApi) => {
    try {
      const res = await cardService.addCard(input.data, input.boardId);
      console.log("addCardAsync", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const updateCardAsync = createAsyncThunk(
  "card/updateCardAsync",
  async (input, thunkApi) => {
    try {
      const { entries, boardId } = input;
      await cardService.updateCards(entries, boardId);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const updateTaskAsync = createAsyncThunk(
  "card/updateTaskAsync",
  async (input, thunkApi) => {
    try {
      const { newCard, boardId } = input;
      await cardService.updateTasks(newCard, boardId);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateCardNameAsync = createAsyncThunk(
  "card/updateCardNameAsync",
  async (input, thunkApi) => {
    try {
      await cardService.updateCardName(input.name, input.id);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAllCardsInOneBoardAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCardsInOneBoardAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cardItems = action.payload ?? [];
      })
      .addCase(getAllCardsInOneBoardAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getDashBoardAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDashBoardAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashBoard = action.payload ?? [];
      })
      .addCase(getDashBoardAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCardAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addCardAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cardItems.push(action.payload);
      })
      .addCase(addCardAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default cardSlice.reducer;
