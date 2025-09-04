import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  status: 'active'
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    }
  }
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
