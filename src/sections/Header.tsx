import { FC } from 'react';

import logo from '../images/logo.webp';

export const Header: FC = () => (
  <header>
    <div className='container h-full p-5'>
      <a
        href='/'
        aria-label='Logo, link to the main page'
        className='flex items-center justify-center'
      >
        <img
          src={logo}
          alt='Logo'
          width={360}
          height={130}
          className='lg:w-[560px]'
        />
      </a>
    </div>
  </header>
);
