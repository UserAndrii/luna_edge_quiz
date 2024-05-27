import 'react-toastify/dist/ReactToastify.min.css';

import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { Footer, Header } from '../sections';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className='flex min-h-screen flex-col'>
    <Header />
    <main className='flex-auto'>{children}</main>
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
