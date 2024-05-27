import { FC } from 'react';

import { Hero } from '../sections';
import { CategoriesList } from '../components/common';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => (
  <>
    <Hero />
    <CategoriesList />
  </>
);
