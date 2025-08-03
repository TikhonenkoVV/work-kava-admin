import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getDesserts = createAsyncThunk(
  'desserts/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.get('/desserts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
