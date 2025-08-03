import { createSlice } from '@reduxjs/toolkit';
import { getHotDogs } from './operations';

const initialState = {
  hotDogs: [],
  isLoading: false,
  error: null
};

const hotDogsSlice = createSlice({
  name: 'hotdogs',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getHotDogs.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHotDogs.fulfilled, (state, { payload }) => {
        state.hotDogs = payload.hot_dogs;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getHotDogs.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const hotDogsReducer = hotDogsSlice.reducer;
