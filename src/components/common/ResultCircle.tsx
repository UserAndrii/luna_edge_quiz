import { FC } from 'react';
import { clsx } from 'clsx';

export interface IResultCircleProps {
  total: number;
  correct: number;
}

export const ResultCircle: FC<IResultCircleProps> = ({ total, correct }) => {
  const percentage = (correct / total) * 100;
  let message = '';

  if (percentage < 50) {
    message = 'Poor performance, you need to study more';
  } else if (percentage >= 50 && percentage < 75) {
    message = 'Not bad, but there is room for improvement';
  } else if (percentage >= 75 && percentage < 95) {
    message = 'Well done, good result';
  } else if (percentage >= 95 && percentage < 100) {
    message = 'Outstanding, you know this topic very well';
  } else if (percentage === 100) {
    message = 'Perfect, you know this topic excellently';
  }

  return (
    <div className='my-8 flex flex-col items-center justify-center'>
      <div className='relative'>
        <svg className='h-24 w-24 md:h-32 md:w-32' viewBox='0 0 36 36'>
          <path
            className='text-red-400'
            d='M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          />
          <path
            className='text-green-400'
            strokeDasharray={`${percentage}, 100`}
            d='M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          />
        </svg>

        <p
          className={clsx(
            'absolute inset-0 flex items-center justify-center text-large',
            {
              'text-red-400': percentage <= 50,
              'text-yellow-600': percentage <= 75,
              'text-green-400': percentage <= 90,
            },
          )}
        >{`${Math.round(percentage)}%`}</p>
      </div>

      <p className='mt-4 text-center text-lg text-gray-700'>{message}</p>
    </div>
  );
};
