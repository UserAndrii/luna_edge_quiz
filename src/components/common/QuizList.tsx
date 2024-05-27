import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { FaArrowRightLong } from 'react-icons/fa6';

import { Button } from '../ui';
import { QuizAnswer } from './QuizAnswer';

import { IQuiz } from '../../types';

export interface IGetAnswers {
  id: number;
  selected: string;
}

export interface IQuizListProps {
  quiz: IQuiz[];
  onCompletedTime: boolean;
  setOnCompletedQuiz: (arg: boolean) => void;
}

export const QuizList: FC<IQuizListProps> = ({
  quiz,
  onCompletedTime,
  setOnCompletedQuiz,
}) => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState('');

  const handleClick = () => {
    setAnswers(prev => [...prev, selected]);
    setSelected('');
    if (index < quiz.length - 1 && selected) {
      return setIndex(prev => prev + 1);
    }
    setOnCompletedQuiz(true);
  };

  return (
    <div className='flex flex-col gap-3'>
      {answers.length !== quiz.length || onCompletedTime ? (
        <>
          <p>
            Question: <span>{index + 1}</span> of <span>{quiz.length}</span>
          </p>

          <h2 className='min-h-16'>{quiz[index].question}</h2>

          <ul className='grid gap-4 md:grid-cols-2'>
            {quiz[index].answers.map(({ text }, index) => (
              <li key={index}>
                <QuizAnswer
                  disabled={onCompletedTime}
                  text={text}
                  index={index}
                  selected={selected}
                  onChange={e => setSelected(e.target.value)}
                  itemStyle={clsx({ 'bg-yellow-600': selected === text })}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className='text-center text-large'>Test passed!</h2>
      )}

      {answers.length !== quiz.length && !onCompletedTime ? (
        <Button
          disabled={onCompletedTime ? false : !selected}
          className='flex h-[44px] w-52 cursor-pointer items-center justify-center gap-3 text-sm capitalize disabled:cursor-not-allowed disabled:bg-slate-400'
          onClick={handleClick}
        >
          Next
          <FaArrowRightLong />
        </Button>
      ) : (
        <Button
          className='mx-auto flex h-[44px] w-52 cursor-pointer items-center justify-center gap-3 text-sm capitalize disabled:cursor-not-allowed disabled:bg-slate-400'
          onClick={() =>
            navigate('/result', { state: { message: { quiz, answers } } })
          }
        >
          Get Result
          <FaArrowRightLong />
        </Button>
      )}
    </div>
  );
};
