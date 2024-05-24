import { FC } from 'react';

import { Button } from '../components/ui';
import { heroContent } from '../data';

export const Hero: FC = () => (
  <section className='container'>
    <h1 className='mb-6 text-center text-[45px]/[1.5]'>{heroContent.title}</h1>
    <div className='grid gap-4 md:grid-cols-2'>
      <p className='text-normal'>{heroContent.promotion}</p>
      <div>
        <p className='mb-4 text-normal'>{heroContent.possibility}</p>
        <Button className='w-52 text-normal capitalize'>
          {heroContent.button}
        </Button>
      </div>
    </div>
  </section>
);
