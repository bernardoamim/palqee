import React from 'react';

function SvgMenu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" {...props}>
      <defs>
        <clipPath id="menu">
          <path fill="none" d="M0 0h34v34H0z" />
        </clipPath>
      </defs>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23.332 13.344L10.566 5.857M23.332 13.343v14.799M17 24.312L4.134 17"
      />
      <g clipPath="url(#menu)">
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 24.313l12.866-7.428"
        />
      </g>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.567 13.285l12.866-7.428M10.567 13.285v14.858M4.531 9.802L17 17.002l12.467-7.2"
      />
      <g
        clipPath="url(#menu)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 17v14.397M29.867 22.713V11.288a2.97 2.97 0 00-1.485-2.573l-9.9-5.714a2.972 2.972 0 00-2.971 0l-9.9 5.714a2.97 2.97 0 00-1.477 2.573v11.425a2.97 2.97 0 001.485 2.573l9.9 5.713a2.972 2.972 0 002.971 0l9.9-5.713a2.97 2.97 0 001.477-2.573z" />
      </g>
    </svg>
  );
}

export default SvgMenu;
