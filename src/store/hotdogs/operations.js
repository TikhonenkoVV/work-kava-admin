import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getHotDogs = createAsyncThunk(
  'hotdogs/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.get('/hotdogs');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
