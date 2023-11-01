import React from 'react';
import '../Custumize_Sidebar.scss';
import { ThemeState } from '../../../../Contexts/Theme_Context';

const Choose_Color = () => {

  const { sidebar_Color_Change, handle_Sidebar_Color_Change } = ThemeState;

  return (
    <div className="Choose_Color">
      <div className="Text">
        <h1>Choose a color to Sidebar</h1>
        <span>What's your color?</span>
      </div>
      <div className='Choose_Type_Color'>
        <select
          name='Sidebar Color'
          value={sidebar_Color_Change}
          onChange={handle_Sidebar_Color_Change}
        >
          <option value="Dark">Dark</option>
          <option value="Blue">Blue</option>
        </select>
      </div>
    </div>
  )
}

export default Choose_Color;
