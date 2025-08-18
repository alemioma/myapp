import React from 'react';

export function ESFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={16}
      height={11}
      {...props}
    >
      <rect width="3" height="2" fill="#aa151b" />
      <rect width="3" height="1.2" y="0.4" fill="#f1bf00" />
    </svg>
  );
}
