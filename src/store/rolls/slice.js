import { createSlice } from '@reduxjs/toolkit';
import { addRoll, getRolls } from './operations';

const initialState = {
  rolls: [],
  isLoading: false,
  error: null
};

const rollsSlice = createSlice({
  name: 'rolls',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRolls.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRolls.fulfilled, (state, { payload }) => {
        state.rolls = payload.rolls;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRolls.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addRoll.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addRoll.fulfilled, (state, { payload }) => {
        state.rolls.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addRoll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const rollsReducer = rollsSlice.reducer;
