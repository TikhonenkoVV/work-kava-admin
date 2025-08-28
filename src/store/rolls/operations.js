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

export const addRoll = createAsyncThunk(
  'rolls/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post('/rolls', credentials);

      const id = data.roll._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaInnstance.post(
        '/rolls/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
