import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import { Button } from '../components/ui';
import { QuizAnswerList, ResultCircle } from '../components/common';

import { IQuiz } from '../types';

export interface ILocationState {
  state: {
    message: {
      quiz: IQuiz[];
      answers: string[];
    };
  };
}
export interface ResultProps {}

export const Result: FC<ResultProps> = () => {
  const navigate = useNavigate();
  const location = useLocation() as ILocationState;

  const [resultSum, setResultSum] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const {
    message: { quiz, answers: getAnswers },
  } = location.state;

  useEffect(() => {
    let sum = 0;

    quiz.forEach(({ id, answers }) => {
      answers.forEach(({ text, isCorrect }) => {
        if (getAnswers[id - 1] === text && isCorrect) {
          sum += 1;
        }
      });
    });

    setResultSum(sum);
  }, [quiz, getAnswers]);

  return (
    <section className='container'>
      <h1 className='text-center text-large'>Your Result:</h1>

      <ResultCircle total={quiz.length} correct={resultSum} />

      <div className='flex justify-center gap-6 mb-6'>
        {showAnswers && (
          <Button
            className='flex items-center justify-center gap-2 text-normal normal-case'
            onClick={() => setShowCorrectAnswers(prev => !prev)}
          >
            {!showCorrectAnswers
              ? 'Show me the correct answers'
              : 'Hide the correct answers'}
          </Button>
        )}

        <Button
          className='flex items-center justify-center gap-2 text-normal normal-case'
          onClick={() => navigate('/')}
        >
          Go Home
          <FaArrowRightLong />
        </Button>
      </div>

      {showAnswers && (
        <QuizAnswerList
          selected={getAnswers}
          quiz={quiz}
          showCorrectAnswers={showCorrectAnswers}
        />
      )}

      <Button
        className='flex text-normal normal-case mx-auto'
        onClick={() => setShowAnswers(prev => !prev)}
      >
        {!showAnswers ? 'Show my answers' : 'Hide my answers'}
      </Button>
    </section>
  );
};
