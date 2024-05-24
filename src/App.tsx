import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Layout } from './layouts';
import { router } from './routing';

export const App: FC = () => (
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);
