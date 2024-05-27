import { FC, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`rounded bg-gray-200 px-4 py-2 text-center text-large uppercase transition-all duration-300 hover:bg-yellow-600 hover:text-white
    focus:bg-yellow-600 focus:text-white ${className}`}
  >
    {children}
  </button>
);
