import { FC } from 'react';

import logo from '../images/logo.webp';

export const Footer: FC = () => (
  <footer className='container grid h-full items-center justify-center gap-6 p-5 md:grid-cols-2'>
    <a
      href='/'
      aria-label='Logo, link to the main page'
      className='flex items-center justify-center'
    >
      <img src={logo} alt='Logo' width={150} />
    </a>

    <p className='text-small'>
      &copy; 2024 | Created by Andrii Hadar | FullStack Developer
    </p>
  </footer>
);
