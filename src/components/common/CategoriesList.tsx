import { FC } from 'react';

import { Button } from '../ui';

import { categoriesData } from '../../data';

export const CategoriesList: FC = () => (
  <section className='container'>
    <ul className='grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3'>
      {categoriesData.map(({ id, category, img }) => (
        <li
          key={id}
          className='group relative rounded bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl focus:shadow-xl'
        >
          <div className='mb-6 h-[230px] w-full'>
            <img
              src={img}
              alt={category}
              className='h-full w-full object-cover'
            />
          </div>

          <Button>{category}</Button>
        </li>
      ))}
    </ul>
  </section>
);
