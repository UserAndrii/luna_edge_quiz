import { FC, ChangeEvent } from 'react';

export interface ICustomAnswerInputProps {
  indx: number;
  text: string;
  isCorrect: boolean;
  handleAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCorrect: () => void;
}

export const CustomAnswerInput: FC<ICustomAnswerInputProps> = ({
  indx,
  text,
  isCorrect,
  handleAnswer,
  handleCorrect,
}) => {
  return (
    <div className='w-full items-center gap-3 md:flex'>
      <label className='mb-2 block w-full text-small font-medium'>
        Answer:
        <input
          type='text'
          value={text}
          onChange={e => handleAnswer(e)}
          className='mr-2 mt-2 w-full rounded border border-gray-300 px-3 py-2 hover:border-yellow-600 focus:border-yellow-600 focus:outline-none'
        />
      </label>
      <label className='min-w-20 cursor-pointer text-sm'>
        <input
          type='radio'
          name={`correctAnswer${indx}`}
          checked={isCorrect}
          onChange={handleCorrect}
          className='mr-2'
        />
        Correct
      </label>
    </div>
  );
};
