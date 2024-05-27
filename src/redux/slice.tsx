import { createSlice } from '@reduxjs/toolkit';

import { getAllQuizesName, getQuizTheme } from './operations';
import { handlePending, handleRejected } from '../utils';
import { ICategoryData, IQuizesData } from '../types';

export interface IQiuzesState {
  quizesName: ICategoryData[];
  quizes: IQuizesData[];
  isLoading: boolean;
  error: unknown;
}

const initialState: IQiuzesState = {
  quizesName: [],
  quizes: [],
  isLoading: false,
  error: null,
};

const quizesSlice = createSlice({
  name: 'quizes',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getAllQuizesName.pending, handlePending)
      .addCase(getAllQuizesName.fulfilled, (state, action) => {
        state.quizesName = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllQuizesName.rejected, handleRejected)

      .addCase(getQuizTheme.pending, handlePending)
      .addCase(getQuizTheme.fulfilled, (state, action) => {
        const isExisting = state.quizes.some(
          item => item.thema === action.payload.thema,
        );
        if (!isExisting) state.quizes.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getQuizTheme.rejected, handleRejected);
  },
});

export const quizes = quizesSlice.reducer;
