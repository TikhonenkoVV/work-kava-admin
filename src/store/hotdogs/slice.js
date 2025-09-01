import { createSlice } from '@reduxjs/toolkit';
import { addHotDog, getHotDogs, updateHotDog } from './operations';

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
      })
      .addCase(addHotDog.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addHotDog.fulfilled, (state, { payload }) => {
        state.hotDogs.push(payload.updated);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addHotDog.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateHotDog.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = payload;
      })
      .addCase(updateHotDog.fulfilled, (state, { payload }) => {
        const index = state.hotDogs.findIndex(
          hotDog => hotDog._id === payload.updated._id
        );
        state.hotDogs[index] = payload.updated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateHotDog.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  }
});

export const hotDogsReducer = hotDogsSlice.reducer;
