import { FC } from 'react';

import { newQuizData } from '../data';
import { Form } from '../components/common';

export const NewQuiz: FC = () => (
  <section className='container mx-auto p-4'>
    <h1 className='mb-6 text-center text-2xl font-bold'>{newQuizData.title}</h1>
    <p className='mb-6 text-center text-lg'>{newQuizData.subtitle}</p>

    <Form />
  </section>
);
