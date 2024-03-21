import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza, pizzaSliceState, Status } from './types';
import { fetchPizzas } from './asyncActions';

const initialState: pizzaSliceState = {
  items: [],
  status: Status.LOADING, //loading | success | error
};

export type SearchPizzaParams = {
  currentPage: string;
  sortBy: string;
  order: string;
  category: string;
  search: string;
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<Pizza[]>) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        },
      )
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export default pizzaSlice.reducer;