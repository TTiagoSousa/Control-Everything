import React, { useState } from 'react';
import './Global_Input.scss';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';

const Global_Input = ({ type, placeholder, value, onChange, max, ref, text, onclick }) => {

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='Global_Input' onClick={onclick}>
      <div className='Text'>
        <span>{text}</span>
      </div>
      <input 
        type={showPassword ? 'text' : type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        max={max}
        ref={ref}
      />
      {type === 'password' && (
        <div 
          className='Icon'
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <Icon.Close_Eye GlobalColor={Color.blue} />
          ) : (
            <Icon.Open_Eye GlobalColor={Color.blue} />
          )}
        </div>
      )}
    </div>
  );
};

export default Global_Input;