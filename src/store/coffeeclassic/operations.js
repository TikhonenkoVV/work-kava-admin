import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getCoffeeClassics = createAsyncThunk(
  'coffeeclassics/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.get('/coffeeclassics');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
