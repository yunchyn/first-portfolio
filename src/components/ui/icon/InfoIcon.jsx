import React from 'react';
import clsx from 'clsx';

export default function InfoIcon({ className, color = 'text-primary' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(color, className)}
    >
      <path
        d="M16 2V4M17.915 22C17.915 20.4087 17.2829 18.8826 16.1576 17.7574C15.0324 16.6321 13.5063 16 11.915 16C10.3237 16 8.79758 16.6321 7.67236 17.7574C6.54714 18.8826 5.915 20.4087 5.915 22M8 2V4M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
