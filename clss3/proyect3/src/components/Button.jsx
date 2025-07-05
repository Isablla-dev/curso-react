import React from 'react';
import { cn } from '../utils/cn';

const Button = ({ isActive, children, className, ...props }) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600 transition-colors',
        isActive && 'bg-blue-500 hover:bg-blue-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;