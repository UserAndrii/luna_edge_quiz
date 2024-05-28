import { createSlice } from '@reduxjs/toolkit';

import { getAllQuizesName, getQuizTheme, postQuiz } from './operations';
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
      .addCase(getQuizTheme.rejected, handleRejected)

      .addCase(postQuiz.pending, handlePending)
      .addCase(postQuiz.fulfilled, (state, action) => {
        state.quizesName.push({
          id: state.quizesName.length + 1,
          category: action.payload.quiz.thema,
          img: action.payload.img,
        });
        state.quizes.push(action.payload.quiz);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postQuiz.rejected, handleRejected);
  },
});

export const quizes = quizesSlice.reducer;
