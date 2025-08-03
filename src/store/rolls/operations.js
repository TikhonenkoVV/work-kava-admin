import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getRolls = createAsyncThunk('rolls/get', async (_, thunkAPI) => {
  try {
    const { data } = await workKavaInnstance.get('/rolls');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
