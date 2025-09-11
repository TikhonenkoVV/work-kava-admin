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

export const addHotDog = createAsyncThunk(
  'hotdogs/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post('/hotdogs', credentials);

      const id = data.hot_dog._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaInnstance.post(
        '/hotdogs/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateHotDog = createAsyncThunk(
  'hotdogs/updateHotDog',
  async (hotDogData, thunkAPI) => {
    const credentials = hotDogData.data;
    try {
      const { data } = await workKavaInnstance.patch(
        `/hotdogs/${hotDogData.id}`,
        credentials
      );

      const id = data.updated._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };

      const keys = Object.keys(imageData);

      if (!img && !webpImg) {
        return data;
      } else {
        const formData = new FormData();
        formData.set('id', id);
        keys.forEach(el => {
          if (imageData[el]) formData.append(el, imageData[el]);
        });
        const { data: images } = await workKavaInnstance.post(
          '/hotdogs/images',
          formData
        );

        return { ...data, ...images };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);

export const deleteHotDog = createAsyncThunk(
  'hotdogs/deleteHotDog',
  async (id, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.delete(`/hotdogs/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status
      });
    }
  }
);
