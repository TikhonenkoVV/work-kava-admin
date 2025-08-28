import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

export const getCoffeeWithMilks = createAsyncThunk(
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

export const addCoffeeWithMilk = createAsyncThunk(
  'coffeewithmilks/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post(
        '/coffeewithmilks',
        credentials
      );

      const id = data.coffee_with_milk._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaInnstance.post(
        '/coffeewithmilks/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
