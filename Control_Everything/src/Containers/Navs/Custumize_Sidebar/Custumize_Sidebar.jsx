// React and scss
  import React, { useState, useEffect } from 'react';
  import './Custumize_Sidebar.scss';
// React and scss

// Internal Imports
  import * as Component from '../../../Imports/components';
// Internal Imports

// Contexts
  import { NavsState } from '../../../Contexts/Navs_Context';
// Contexts

const Custumize_Sidebar = () => {

  const { customize_Sidebar, setCustomize_Sidebar, showCustomize_Sidebar } = NavsState();

  return (
    <>
      <Component.Dark_Div 
       toggled={setCustomize_Sidebar}
       toggle={customize_Sidebar}
      />

      <nav className={`Custumize_Sidebar ${customize_Sidebar ? 'active' : ''}`}>
        <span>teste</span>
      </nav>
    </>
  )
};

export default Custumize_Sidebar;