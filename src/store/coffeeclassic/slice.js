import { createSlice } from '@reduxjs/toolkit';
import { addCoffeeClassic, getCoffeeClassics } from './operations';

const initialState = {
  coffeeClassics: [],
  image: null,
  isLoading: false,
  error: null
};

const coffeeClassicSlice = createSlice({
  name: 'coffeeclassics',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCoffeeClassics.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCoffeeClassics.fulfilled, (state, { payload }) => {
        state.coffeeClassics = payload.coffee_classic;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCoffeeClassics.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addCoffeeClassic.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCoffeeClassic.fulfilled, (state, { payload }) => {
        state.coffeeClassics.push(payload.coffee_classic);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCoffeeClassic.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const coffeeClassicReducer = coffeeClassicSlice.reducer;
