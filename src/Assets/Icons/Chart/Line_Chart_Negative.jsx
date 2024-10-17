import React from 'react';

const Line_Chart_Negative = ({ Global_Color }) => {

  return (
    <svg id="visual" viewBox="0 0 900 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
      <path d="M0 249L15 273.5C30 298 60 347 90 338.2C120 329.3 150 262.7 180 255.3C210 248 240 300 270 334C300 368 330 384 360 374.8C390 365.7 420 331.3 450 290C480 248.7 510 200.3 540 208C570 215.7 600 279.3 630 289C660 298.7 690 254.3 720 232.5C750 210.7 780 211.3 810 222.2C840 233 870 254 885 264.5L900 275L900 451L885 451C870 451 840 451 810 451C780 451 750 451 720 451C690 451 660 451 630 451C600 451 570 451 540 451C510 451 480 451 450 451C420 451 390 451 360 451C330 451 300 451 270 451C240 451 210 451 180 451C150 451 120 451 90 451C60 451 30 451 15 451L0 451Z" fill={Global_Color} strokeLinecap="round" strokeLinejoin="miter">
      </path>
    </svg>
  )
};

export default Line_Chart_Negative;