import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars, getCarById, getBrands } from '../../services/api';

// Отримання списку авто (можна передавати параметри для фільтрації, пагінації і т.д.)
export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (params, thunkAPI) => {
    try {
      const { data } = await getCars(params);
      // Повертаємо масив машин з об'єкта data
      return data.cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання конкретної машини за ID
export const fetchCarById = createAsyncThunk(
  'cars/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await getCarById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання брендів для фільтрації
export const fetchBrands = createAsyncThunk(
  'cars/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const { data } = await getBrands();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
