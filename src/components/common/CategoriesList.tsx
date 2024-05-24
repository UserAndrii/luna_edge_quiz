import { FC, useEffect } from 'react';

import { Button } from '../ui';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllQuizesName } from '../../redux/operations';
import { selectAllQuizName } from '../../redux/selectors';

export const CategoriesList: FC = () => {
  const dispatch = useAppDispatch();
  const quizNames = useAppSelector(selectAllQuizName);

  useEffect(() => {
    dispatch(getAllQuizesName());
  }, [dispatch]);

  return (
    <section className='container'>
      <ul className='grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3'>
        {quizNames.map(({ id, category, img }) => (
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
};
