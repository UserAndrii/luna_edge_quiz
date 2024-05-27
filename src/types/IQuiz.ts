export interface IQuiz {
  id: number;
  question: string;
  answers: { text: string; isCorrect: boolean }[];
}
