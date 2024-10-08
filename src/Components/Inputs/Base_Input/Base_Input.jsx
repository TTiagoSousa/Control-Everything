import React from 'react';
import './Base_Input.scss';

const Base_Input = ({ type, inputTypeStyle, placeholder, value, onChange }) => {

  return (
    <div className={`Base_Input`}>
      <input 
        type={type} 
        className={`${inputTypeStyle}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Base_Input;