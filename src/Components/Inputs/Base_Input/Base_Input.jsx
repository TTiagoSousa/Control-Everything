import React from 'react';
import './Base_Input.scss';
import { ThemeState } from '../../../Contexts/Theme_Context';
import * as Color from '../../../Styles/Colors';

const Base_Input = ({ type, inputTypeStyle, placeholder, value, onChange }) => {

  const { mode } = ThemeState();

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