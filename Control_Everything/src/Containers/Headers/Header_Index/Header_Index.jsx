// React and Scss
  import React from 'react';
  import './Header_Index.scss';
  import { Link } from 'react-router-dom';
// React and Scss

// Internal Imports
  import * as Component from '../../../Imports/components';
// Internal Imports

const Header_Index = () => {
  return (

    <header className='Header_Index'>
      <div className="Left_Side">
        <div className="Title">
          <h1>Control Everything</h1>
        </div>
      </div>
      <div className="Right_Side">
        <div className='Theme_Button'>
          <Component.Change_Theme />
        </div>
        <div className='Sidebar_Button'>
          <Component.Custumize_Sidebar_Button />
        </div>
        <Link>
          <span>Login or Register</span>
        </Link>
      </div>
    </header>

  )
}

export default Header_Index;