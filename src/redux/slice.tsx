import { createSlice } from '@reduxjs/toolkit';

import { getAllQuizesName } from './operations';

import { ICategoryData } from '../types';

export interface IQiuzesState {
  quizesName: ICategoryData[];
  quizes: [];
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
      .addCase(getAllQuizesName.rejected, handleRejected);
  },
});

function handlePending(state: { isLoading: boolean }) {
  state.isLoading = true;
}

function handleRejected(
  state: { isLoading: boolean; error: unknown },
  action: { payload: unknown },
) {
  state.isLoading = false;
  state.error = action.payload;
}

export const quizes = quizesSlice.reducer;
