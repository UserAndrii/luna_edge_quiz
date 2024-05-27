import 'react-toastify/dist/ReactToastify.min.css';

import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Footer, Header } from '../sections';

export const Layout: FC = () => (
  <div className='flex min-h-screen flex-col'>
    <Header />

    <main className='flex-auto'>
      <Suspense fallback={'Loading....'}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />

    <ToastContainer
      position='top-right'
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
  </div>
);
