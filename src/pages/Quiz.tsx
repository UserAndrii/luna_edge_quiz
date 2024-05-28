import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { QuizList } from '../components/common';
import { CountdownTimer } from '../components/common';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectQuizTheme } from '../redux/selectors';
import { getQuizTheme } from '../redux/operations';

export interface ILocationState {
  state: {
    message?: string;
  };
}

export const Quiz: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation() as ILocationState;
  const quizTheme = useAppSelector(selectQuizTheme);

  const [onCompletedTime, setOnCompletedTime] = useState(false);
  const [onCompletedQuiz, setOnCompletedQuiz] = useState(false);

  const { message: quizName } = location.state;

  useEffect(() => {
    if (quizName) {
      dispatch(getQuizTheme(quizName));
    }
  }, [dispatch, quizName]);

  const thema = quizTheme?.find(item => item?.thema === quizName);

  return (
    <section className='container'>
      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-large'>
          Quiz: <span className='uppercase'>{quizName}</span>
        </h1>

        {!onCompletedQuiz && (
          <CountdownTimer
            completed={onCompletedTime}
            onComplete={setOnCompletedTime}
          />
        )}
      </div>

      {thema && (
        <QuizList
          quiz={thema.quiz}
          onCompletedTime={onCompletedTime}
          setOnCompletedQuiz={setOnCompletedQuiz}
        />
      )}
    </section>
  );
};
