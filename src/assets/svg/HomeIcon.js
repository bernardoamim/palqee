import React from 'react';

function SvgHome(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" {...props}>
      <defs>
        <clipPath id="home_svg__a">
          <path fill="none" d="M.144.144h34v34h-34z" />
        </clipPath>
      </defs>
      <g clipPath="url(#home_svg__a)" transform="translate(-.144 -.144)">
        <path
          d="M13.572 29.287v-6.429a3.572 3.572 0 017.143 0v6.429h7.857V17.021a2.858 2.858 0 00-.837-2.02l-9.581-9.582a1.427 1.427 0 00-2.02 0L6.552 15a2.858 2.858 0 00-.837 2.021v12.266z"
          fill="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default SvgHome;
