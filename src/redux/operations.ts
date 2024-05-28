import { createAsyncThunk } from '@reduxjs/toolkit';

import { categoriesData, quizesData } from '../data';

import { ICategoryData, IQuiz, IQuizesData } from '../types';
import { IRootState } from './store';

export const getAllQuizesName = createAsyncThunk<
  ICategoryData[],
  void,
  { state: IRootState }
>('quiz/getAllQuizesName', async (_, { rejectWithValue, getState }) => {
  try {
    const {
      quizes: { quizesName },
    } = getState();

    await new Promise(resolve => setTimeout(resolve, 250));

    if (quizesName.length > categoriesData.length) {
      return quizesName;
    }

    return categoriesData;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getQuizTheme = createAsyncThunk<
  IQuizesData,
  string,
  { state: IRootState }
>('quiz/getQuizTheme', async (quiz, { rejectWithValue, getState }) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 250));

    const {
      quizes: { quizes },
    } = getState();

    const quizThema = quizes.find(
      (item: { thema: string }) => item.thema === quiz,
    ) as IQuizesData;

    if (quizThema && quizThema.thema) {
      return quizThema;
    }

    return quizesData.find(item => item.thema === quiz) as IQuizesData;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postQuiz = createAsyncThunk<
  { quiz: IQuizesData; img: string },
  { thema: string; quiz: IQuiz[]; img: string }
>('quiz/postQuiz', async ({ thema, quiz, img }, thunkAPI) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 250));

    const newQuizes = {
      id: quizesData.length + 1,
      thema,
      quiz,
    };

    return { quiz: newQuizes, img: img };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
