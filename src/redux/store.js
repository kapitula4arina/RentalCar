import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import carsReducer from './cars/carsSlice';
import favoritesReducer from './favorites/favoritesSlice';
import filtersReducer from './filters/filtersSlice';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: favoritesReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
