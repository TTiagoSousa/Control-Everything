import React from 'react';
import './CE_Work_Space.scss';
import { Link } from 'react-router-dom';
import * as Container from '../../../Imports/containers';

const CE_Work_Space = () => {
  return (

    <>
      <div className='CE_Section'>

        <Container.Sidebar_Home />
        

        <div className='CE_Work_Space'></div>

      </div>
    </>

    // <div className='CE_Work_Space'>
    //   <div>
    //     <span>Function Validation</span>
    //     <a 
    //       href="https://docs.google.com/spreadsheets/d/16CZDwGP0fykb0kPEoaLqP62Hj3Zn7XxtU6MjgXuhRuQ/edit?usp=drive_link" 
    //       target="_blank" 
    //       rel="noopener noreferrer"
    //    >
    //     <button>Link</button>
    //   </a>
    //   </div>
    // </div>
  )
};

export default CE_Work_Space;