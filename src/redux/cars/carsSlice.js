import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarById } from './carsOps';
import { fetchBrands } from './brandsOps';

const initialState = {
  items: [], // усі авто (для каталогу)
  currentCar: null, // авто для сторінки деталей
  brands: [], // бренди для фільтрації
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCarById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchBrands.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
