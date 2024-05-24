// import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  categoriesData,
  // htmlQuizData,
  // cssQuizData,
  // jsQuizData,
  // reactQuizData,
  // nextQuizData,
} from '../data';

import { ICategoryData } from '../types';

export const getAllQuizesName = createAsyncThunk<ICategoryData[], void>(
  'quiz/getAll',
  async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(categoriesData);
        } catch (error) {
          reject(error);
        }
      }, 250);
    });
  },
);
