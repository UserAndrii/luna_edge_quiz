import { ChangeEvent, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export interface IQuizAnswerProps {
  index: number;
  selected: string;
  text: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  itemStyle?: string;
  labelStyle?: string;
  disabled?: boolean;
  isCorrect?: boolean;
}

export const QuizAnswer: FC<IQuizAnswerProps> = ({
  index,
  selected,
  text,
  onChange,
  itemStyle,
  labelStyle,
  disabled = false,
  isCorrect,
}) => {
  const { pathname } = useLocation();

  return (
    <div
      className={clsx('flex items-center rounded bg-gray-200 px-3', itemStyle, {
        'bg-yellow-600': selected === text,
        'bg-green-400':
          selected === text && isCorrect && pathname === '/result',
        'bg-red-400': selected === text && !isCorrect && pathname === '/result',
      })}
    >
      <input
        disabled={disabled}
        type='radio'
        id={`answer-${index}`}
        name='answer'
        value={text}
        checked={selected === text}
        onChange={onChange}
        className='mr-2 cursor-pointer'
      />
      <label
        htmlFor={`answer-${index}`}
        className={clsx(
          'flex h-16 w-full cursor-pointer items-center p-3 text-sm',
          labelStyle,
        )}
      >
        {text}
      </label>
    </div>
  );
};
