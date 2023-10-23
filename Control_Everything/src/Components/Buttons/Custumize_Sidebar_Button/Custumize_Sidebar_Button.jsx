// React and Scss
  import React from 'react';
  import './Custumize_Sidebar_Button.scss'
// React and Scss

// Internal Imports
  import * as Icon from '../../../Imports/icons';
  import * as Color from '../../../Styles/Colors';
// Internal Imports

// Contexts
  import { NavsState } from '../../../Contexts/Navs_Context';
// Contexts

const Custumize_Sidebar_Button = () => {

  const { showCustomize_Sidebar } = NavsState();

  return (
    <div
      className='Custumize_Sidebar_Button'
      onClick={showCustomize_Sidebar}
    >
      <div>
        <Icon.Settings_With_Two_Arrows 
          GlobalColor={Color.blue} 
          Color_2={Color.green} 
          Color_1={Color.green}
        />
      </div>
    </div>
  )
};

export default Custumize_Sidebar_Button;