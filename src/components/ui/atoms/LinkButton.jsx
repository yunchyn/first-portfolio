import React from 'react';
import clsx from 'clsx';

export default function LinkButton({ link, children, className, isScrolled }) {
  return (
    <a
      href={link}
      target="_blank"
      className={clsx(
        'flex flex-row items-center gap-2 justify-center rounded-[10px]',
        isScrolled ? 'px-2.5 py-1' : 'px-5 py-2.5',
        'font-bold text-sm',
        'hover:opacity-70 duration-300 cursor-pointer',
        className
      )}
    >
      {children}
    </a>
  );
}
