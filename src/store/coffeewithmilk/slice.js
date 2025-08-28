import { createSlice } from '@reduxjs/toolkit';
import { addCoffeeWithMilk, getCoffeeWithMilks } from './operations';

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
      .addCase(getCoffeeWithMilks.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCoffeeWithMilks.fulfilled, (state, { payload }) => {
        state.coffeeWithMilks = payload.coffee_with_milk;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCoffeeWithMilks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addCoffeeWithMilk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCoffeeWithMilk.fulfilled, (state, { payload }) => {
        state.coffeeWithMilks.push(payload.coffee_with_milk);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCoffeeWithMilk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const coffeeWithMilkReducer = coffeeWithMilkSlice.reducer;
