import { createSlice } from '@reduxjs/toolkit';
import { addBurger, getBurgers } from './operations';

const initialState = {
  burgers: [],
  isLoading: false,
  error: null
};

const burgersSlice = createSlice({
  name: 'burgers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBurgers.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBurgers.fulfilled, (state, { payload }) => {
        state.burgers = payload.burgers;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBurgers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBurger.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBurger.fulfilled, (state, { payload }) => {
        state.burgers.push(payload.burgers);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBurger.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const burgersReducer = burgersSlice.reducer;
