import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layouts';

import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Result } from './pages/Result';

export const App: FC = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/result' element={<Result />} />
      <Route path='*' element={<Home />} />
    </Route>
  </Routes>
);
