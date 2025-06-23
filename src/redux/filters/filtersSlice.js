import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from '../cars/carsOps';

const initialState = {
  brand: null,
  rentalPrice: null,
  minMileage: '',
  maxMileage: '',
  brands: [],
  brandsLoading: false,
  brandsError: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    clearFilters() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
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

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
