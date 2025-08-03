import { createSlice } from '@reduxjs/toolkit';
import { getCoffeeWithMilk } from './operations';

const initialState = {
  coffeeWithMilks: [],
  isLoading: false,
  error: null
};

const coffeeWithMilkSlice = createSlice({
  name: 'coffeewithmilks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCoffeeWithMilk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCoffeeWithMilk.fulfilled, (state, { payload }) => {
        state.coffeeWithMilks = payload.coffee_with_milk;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCoffeeWithMilk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const coffeeWithMilkReducer = coffeeWithMilkSlice.reducer;
