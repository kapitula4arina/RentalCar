import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarById, fetchBrands } from './carsOps';

const initialState = {
  items: [], // авто для каталогу
  itemsLoading: false,
  itemsError: null,

  currentCar: null, // авто для деталей
  currentCarLoading: false,
  currentCarError: null,

  brands: [], // список брендів
  brandsLoading: false,
  brandsError: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // fetchCars
      .addCase(fetchCars.pending, state => {
        state.itemsLoading = true;
        state.itemsError = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.itemsLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.itemsLoading = false;
        state.itemsError = action.payload;
      })

      // fetchCarById
      .addCase(fetchCarById.pending, state => {
        state.currentCarLoading = true;
        state.currentCarError = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.currentCarLoading = false;
        state.currentCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.currentCarLoading = false;
        state.currentCarError = action.payload;
      })

      // fetchBrands
      .addCase(fetchBrands.pending, state => {
        state.brandsLoading = true;
        state.brandsError = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brandsLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.brandsLoading = false;
        state.brandsError = action.payload;
      });
  },
});

export default carsSlice.reducer;
