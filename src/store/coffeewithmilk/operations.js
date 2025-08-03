import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getCoffeeWithMilk = createAsyncThunk(
  'coffeewithmilks/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.get('/coffeewithmilks');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
