import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cardService from "../../../../api/cardApi";
// const getInitialCard = () => {
//   const localCard = window.localStorage.getItem("card");
//   if (localCard) {
//     return JSON.parse(localCard);
//   }
//   window.localStorage.setItem("card", JSON.stringify([]));
//   return [];
// };

// const initialValue = {
//   cardItems: getInitialCard(),
// };

const initialValue = {
  isLoading: false,
  error: null,
  board: [],
  members: [],
};
export const fetchCardsAsync = createAsyncThunk(
  "card/fetchCardsAsync",
  async (input, thunkApi) => {
    console.log(input);
    try {
      const res = await cardService.getAllCards(input);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: initialValue,
  reducers: {
    addCard: (state, action) => {
      state.cardItems.push(action.payload);
      const card = window.localStorage.getItem("card");
      if (card) {
        const cardArr = JSON.parse(card);
        cardArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("card", JSON.stringify(cardArr));
      }
      window.localStorage.setItem(
        "card",
        JSON.stringify([{ ...action.payload }])
      );
    },
  },
  // extraReducers: (builder) =>
  //   builder
  //     .addCase(fetchCardsAsync.pending, (state, action) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchCardsAsync.fulfilled, (state, action) => {
  //       state.board = action.payload;
  //       state.isLoading = false;
  //     })
  //     .addCase(fetchCardsAsync.rejected, (state, action) => {
  //       state.error = action.payload;
  //       state.isLoading = false;
  //     }),
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
