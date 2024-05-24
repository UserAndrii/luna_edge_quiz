import { ICategoryData } from '../types';

export const selectAllQuizName = (state: {
  quizes: { quizesName: ICategoryData[] };
}) => state.quizes.quizesName;
