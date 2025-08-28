import { createAsyncThunk } from '@reduxjs/toolkit';
import { workKavaInnstance } from 'store/auth/operations';

// export const addCoffeeClassicImages = createAsyncThunk(
//   'coffeeclassics/addimages',
//   async (imageFiles, thunkAPI) => {
//     try {
//       const keys = Object.keys(imageFiles);
//       const formData = new FormData();
//       keys.forEach(el => {
//         formData.append(el, imageFiles[el]);
//       });

//       const { images: data } = await workKavaInnstance.post(
//         '/coffeeclassics/images',
//         formData
//       );
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response.data.message,
//         status: error.response.status
//       });
//     }
//   }
// );

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

export const addCoffeeClassic = createAsyncThunk(
  'coffeeclassic/create',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await workKavaInnstance.post(
        '/coffeeclassics',
        credentials
      );

      const id = data.coffee_classic._id;

      const { img, webpImg } = credentials;
      const imageData = { img, webpImg };
      const keys = Object.keys(imageData);
      const formData = new FormData();
      formData.set('id', id);
      keys.forEach(el => {
        formData.append(el, imageData[el]);
      });
      const { data: images } = await workKavaInnstance.post(
        '/coffeeclassics/images',
        formData
      );

      return { ...data, ...images };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
