import { FC, ChangeEvent } from 'react';

export interface ICustomInputProps {
  indx: number;
  question: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomQuestionInput: FC<ICustomInputProps> = ({
  indx,
  question,
  onChange,
}) => {
  return (
    <label className='mb-2 block text-lg font-medium'>
      Question {indx + 1}:
      <input
        type='text'
        value={question}
        onChange={e => onChange(e)}
        className='mt-2 w-full rounded border border-gray-300 px-3 py-2 hover:border-yellow-600 focus:border-yellow-600 focus:outline-none'
      />
    </label>
  );
};
