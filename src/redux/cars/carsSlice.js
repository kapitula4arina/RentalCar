import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarById, fetchBrands } from './carsOps';

const initialState = {
  items: [],
  itemsLoading: false,
  itemsError: null,
  totalCars: 0,
  page: 1,
  currentCar: null,
  currentCarLoading: false,
  currentCarError: null,
  brands: [],
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
        const { cars, totalCars, page } = action.payload;

        state.totalCars = totalCars;
        state.page = page;

        if (page && page > 1) {
          state.items = [...state.items, ...cars];
        } else {
          state.items = cars;
        }
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
