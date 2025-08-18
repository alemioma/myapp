import React from 'react';

export function SVFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={10}
      viewBox="0 0 16 10"
      {...props}
    >
      <path fill="#006aa7" d="M0 0h16v10H0z" />
      <path fill="#fecc00" d="M5 0h2v10H5z" />
      <path fill="#fecc00" d="M0 4h16v2H0z" />
    </svg>
  );
}
