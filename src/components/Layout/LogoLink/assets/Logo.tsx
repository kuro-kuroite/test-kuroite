import React, { SVGProps, VFC } from 'react';

export const Logo: VFC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    aria-label="Kuroite"
    height="1em"
    role="img"
    viewBox="0 0 52 52"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="translate(0,52) scale(0.1,-0.1)">
      <path
        d="M145 499c-95 -47 -145 -129 -145 -237l0 -67 98 -98 97 -97 66 0
c37 0 83 7 103 15 52 22 111 78 135 130 26 55 29 164 6 219 -22 52 -78 111
-130 135 -60 28 -173 29 -230 0z m197 -95c78 -40 113 -162 69 -241 -56 -99
-185 -123 -268 -50 -64 56 -81 142 -43 217 44 86 152 119 242 74z"
        fill="#e44d26"
      />
      <circle cx="452%" cy="435%" fill="#dd3a0a" r="95" />
    </g>
  </svg>
);