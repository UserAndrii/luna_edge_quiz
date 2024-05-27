import { createAsyncThunk } from '@reduxjs/toolkit';

import { categoriesData, quizesData } from '../data';

import { ICategoryData, IQuizesData } from '../types';

export const getAllQuizesName = createAsyncThunk<ICategoryData[], void>(
  'quiz/getAllQuizesName',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 250));

      return categoriesData;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getQuizTheme = createAsyncThunk<IQuizesData, string>(
  'quiz/getQuizTheme',
  async (quiz, thunkAPI) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 250));
      return quizesData.find(item => item.thema === quiz) as IQuizesData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
