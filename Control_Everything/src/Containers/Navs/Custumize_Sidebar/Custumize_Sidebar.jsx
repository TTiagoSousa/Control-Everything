// React and scss
  import React, { useState, useEffect } from 'react';
  import './Custumize_Sidebar.scss';
// React and scss

// Internal Imports
  import * as Component from '../../../Imports/components';
  import * as Icon from '../../../Imports/icons';
  import * as Color from '../../../Styles/Colors';
// Internal Imports

// Contexts
  import { NavsState } from '../../../Contexts/Navs_Context';
  import { ThemeState } from '../../../Contexts/Theme_Context';
// Contexts

const Custumize_Sidebar = () => {

  const { handleDarkMode, handleLightMode, handleAutoMode, mode } = ThemeState();
  const { customize_Sidebar, setCustomize_Sidebar, showCustomize_Sidebar } = NavsState();

  // Reset Options
  const resetToLightMode = () => {
    handleAutoMode(); 
  };

  return (
    <>
      <Component.Dark_Div 
       toggled={setCustomize_Sidebar}
       toggle={customize_Sidebar}
      />

      <nav className={`Custumize_Sidebar ${customize_Sidebar ? 'active' : ''}`}>
        <header>
          <div className='Circle_N1'></div>
          <div className='Circle_N2'></div>  
          <div className="Container">
            <div className="Top">
              <div className="Left">
                <div className='Icon' >
                  <Icon.Painting 
                    GlobalColor={Color.whitte}
                  />
                </div>
                <h1>Settings</h1>
                <button onClick={resetToLightMode}>
                  <div>
                    <Icon.Back_Square 
                      GlobalColor={Color.whitte}
                    />
                  </div>
                  <span>Reset</span>
                </button>
              </div>
              <div className="Right">
                <div 
                  className='Close_Icon'
                  onClick={showCustomize_Sidebar}
                >
                  <div className='Line_N1'></div>
                  <div className='Line_N2'></div>
                </div>
              </div>
            </div>
            <div className="Bottom">
              <span>Set your own customized style</span>
            </div>
          </div>
        </header>

        <div className='Settings_Container'>

          {/* Chosse the theme */}
            <div className='Toggle_Theme'>
              <div className='Text'>
                <h1>Color Scheme</h1>
                <span>Choose the perfect color mode for your app.</span>
              </div> 
              <div className='Type_Of_Modes'>
                <div className={`Dark ${mode === 'dark' ? 'GreenBoxShadow' : ''}`} onClick={handleDarkMode}> 
                  <span>Dark Mode</span>
                </div>
                <div className={`Ligth ${mode === 'light' ? 'GreenBoxShadow' : ''}`} onClick={handleLightMode}>
                  <span>Light Mode</span>
                </div>
                <div className={`Auto ${mode === 'auto' ? 'GreenBoxShadow' : ''}`} onClick={handleAutoMode}>
                  <span>Auto Mode</span>
                </div>
              </div>
            </div>
          {/* Chosse the theme */}

        </div>
      </nav>
    </>
  )
};

export default Custumize_Sidebar;