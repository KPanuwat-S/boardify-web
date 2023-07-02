import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as cardService from "../../../../api/cardApi";
const initialState = {
  cardItems: [],
  isLoading: false,
  error: null,
};

export const getAllCardsInOneBoardAsync = createAsyncThunk(
  "card/getAllCardsInOneBoardAsync",
  async (input, thunkApi) => {
    try {
      const res = await cardService.getAllCards(input);
      console.log("getAllCardsInOneBoardAsync", res);
      return res.data.cards;
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
