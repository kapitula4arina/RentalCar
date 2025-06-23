import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite(state, action) {
      const carId = action.payload;
      const index = state.indexOf(carId);
      if (index === -1) {
        state.push(carId);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
