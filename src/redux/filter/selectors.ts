import { RootState } from '../store';

export const searchValueSelector = (state: RootState) =>
  state.filter.searchValue;
export const filterSelector = (state: RootState) => state.filter;
export const sortSelector = (state: RootState) => state.filter.sort;