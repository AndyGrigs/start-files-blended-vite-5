import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

const initialState = {
  baseCurrency: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const currencyReducer = currencySlice.reducer;
