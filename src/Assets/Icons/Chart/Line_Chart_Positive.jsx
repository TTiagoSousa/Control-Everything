import React from 'react';

const Line_Chart_Positive = ({ Global_Color }) => {

  return (
    <svg id="visual" viewBox="0 0 900 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
      <path d="M0 313L30 316C60 319 120 325 180 340.7C240 356.3 300 381.7 360 376.7C420 371.7 480 336.3 540 330.7C600 325 660 349 720 326.2C780 303.3 840 233.7 870 198.8L900 164L900 451L870 451C840 451 780 451 720 451C660 451 600 451 540 451C480 451 420 451 360 451C300 451 240 451 180 451C120 451 60 451 30 451L0 451Z" fill={Global_Color} strokeLinecap="round" strokeLinejoin="miter"></path>
    </svg>
  )
};

export default Line_Chart_Positive;