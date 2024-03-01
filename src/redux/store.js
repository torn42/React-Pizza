import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});
