import { ICategoryData, IQuizesData } from '../types';

export const selectAllQuizName = (state: {
  quizes: { quizesName: ICategoryData[] };
}) => state.quizes.quizesName;

export const selectQuizTheme = (state: {
  quizes: { quizes: IQuizesData[] };
}) => {
  return state.quizes.quizes;
};
