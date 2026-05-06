import type { ReactNode, ButtonHTMLAttributes } from 'react';

export default function Button({ 
  children, 
  className, 
  ...props 
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        border-2
        bg-transparent
        transition-all
        duration-300
        ${className || ''}
      `}
    >
      {/* Camada delicada de preenchimento */}
      <div 
        className="
          absolute 
          inset-0 
          bg-current 
          opacity-0 
          transition-opacity 
          duration-300 
          group-hover:opacity-[0.08]
          rounded-full
        " 
      />

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}