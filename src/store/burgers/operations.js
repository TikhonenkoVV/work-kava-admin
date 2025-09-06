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

export const addBurger = createAsyncThunk(
  'burgers/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post('/burgers', credentials);

      const id = data.burger._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaInnstance.post(
        '/burgers/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBurger = createAsyncThunk(
  'burgers/updateBurger',
  async (burgerData, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.patch(
        `/burgers/${burgerData.id}`,
        burgerData.data
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const deleteBurger = createAsyncThunk(
  'burgers/deleteBurger',
  async (id, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.delete(`/burgers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);
