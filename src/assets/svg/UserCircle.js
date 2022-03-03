import React from 'react';

function SvgUserCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <defs>
        <clipPath id="userCircle_svg__a">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g
        clipPath="url(#userCircle_svg__a)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={9} cy={9} r={9} transform="translate(3 3)" />
        <path d="M14.813 10.313A2.813 2.813 0 1112 7.5a2.813 2.813 0 012.813 2.813zM17.707 18.958a7.853 7.853 0 00-11.413 0" />
      </g>
    </svg>
  );
}

export default SvgUserCircle;
