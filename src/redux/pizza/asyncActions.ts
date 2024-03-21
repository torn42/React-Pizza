import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza } from './types';
import { SearchPizzaParams } from './slice';

import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: SearchPizzaParams) => {
    const { currentPage, sortBy, order, category, search } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://65c5bde8e5b94dfca2e039c5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);