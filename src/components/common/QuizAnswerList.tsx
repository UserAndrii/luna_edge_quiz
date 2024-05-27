import { FC } from 'react';

import { QuizAnswer } from './QuizAnswer';

import { IQuiz } from '../../types';

export interface IQuizAnswerListProps {
  quiz: IQuiz[];
  selected: string[];
}

export const QuizAnswerList: FC<IQuizAnswerListProps> = ({
  quiz,
  selected,
}) => {
  return (
    <ul className='flex flex-col gap-8 py-8'>
      {quiz.map(({ question, id, answers }) => (
        <li key={id}>
          <h2 className='mb-6'>{`${id}) ${question}`}</h2>

          <ul className='grid gap-4 md:grid-cols-2'>
            {answers.map(({ text, isCorrect }, index) => (
              <li key={index}>
                <QuizAnswer
                  disabled={true}
                  text={text}
                  index={index}
                  selected={
                    selected.find((a, i) => a === text && i + 1 === id) || ''
                  }
                  isCorrect={isCorrect}
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
