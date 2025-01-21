import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
        variant === 'primary'
          ? 'bg-gray-700 text-white hover:bg-gray-600'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      {children}
    </button>
  );
}