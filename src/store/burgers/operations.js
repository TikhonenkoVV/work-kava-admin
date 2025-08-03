import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getBurgers = createAsyncThunk(
  'burgers/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.get('/burgers');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
