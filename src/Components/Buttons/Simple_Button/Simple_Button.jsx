import React from 'react';
import { Link } from 'react-router-dom';
import './Simple_Button.scss';

const Simple_Button = ({ Text, to, id, style, onClick, disabled  }) => {
  
  return (
    <>
      <Link 
        to={to}
        className='Simple_Button'
      >
        <button 
          id={id}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          {Text}
          </button>
      </Link>
    </>
  )

};

export default Simple_Button;