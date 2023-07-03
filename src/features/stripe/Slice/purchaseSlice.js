import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as stripeService from "../../../api/stripeApi";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  dataPayment: null,
};

export const createCheckout = createAsyncThunk(
  "stripe/createCheckout",
  async (input, thunkApi) => {
    try {
      //   console.log(input);
      const res = await stripeService.createCheckout(input);
      console.log("qqqq", res.data);
      //   console.log("dddd", res.data);
      return res.data;
      //   return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createPayment = createAsyncThunk(
  "stripe/createPayment",
  async (id, thunkApi) => {
    try {
      const res = await stripeService.createPayment(id);
      console.log(res);
      // return res
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const stripeSlice = createSlice({
  name: "stripe",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(createCheckout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataPayment = action.payload;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export default stripeSlice.reducer;
