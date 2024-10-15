import React from 'react';
import { Link } from 'react-router-dom';
import './Simple_Button.scss';

const Simple_Button = ({ text, to, id, style, onClick, disabled, buttonStyle }) => {

  return (
    <>
      <Link 
        to={to}
        className='Simple_Button'
      >
        <button 
          className={`${buttonStyle}`}
          id={id}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          <span>{text}</span>
          </button>
      </Link>
    </>
  )
}

export default Simple_Button
