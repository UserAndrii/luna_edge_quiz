import { FC } from 'react';

import { CategoriesList } from '../components/common';
import { Hero } from '../sections';

export interface HomeProps {}

export const Home: FC<HomeProps> = () => (
  <>
    <Hero />
    <CategoriesList />
  </>
);
