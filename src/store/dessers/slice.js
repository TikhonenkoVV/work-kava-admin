import { createSlice } from '@reduxjs/toolkit';
import { addDessert, getDesserts } from './operations';

const initialState = {
  desserts: [],
  isLoading: false,
  error: null
};

const dessertsSlice = createSlice({
  name: 'desserts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getDesserts.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDesserts.fulfilled, (state, { payload }) => {
        state.desserts = payload.desserts;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDesserts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addDessert.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addDessert.fulfilled, (state, { payload }) => {
        state.desserts.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDessert.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const dessertsReducer = dessertsSlice.reducer;
