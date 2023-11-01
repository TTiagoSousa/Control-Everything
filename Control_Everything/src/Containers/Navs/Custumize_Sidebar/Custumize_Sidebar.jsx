import React, { useState, useEffect } from 'react';
import './Custumize_Sidebar.scss';
import * as Component from '../../../Imports/components';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { NavsState } from '../../../Contexts/Navs_Context';
import { ThemeState } from '../../../Contexts/Theme_Context';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
import Choose_Color from './Components/Choose_Color';
import Diviser from './Components/Diviser';
import Toggle_Theme from './Components/Toggle_Theme';

const Custumize_Sidebar = () => {

  const { handleAutoMode, setSidebar_Color_Change } = ThemeState();
  const { customize_Sidebar, setCustomize_Sidebar, showCustomize_Sidebar, typeOfNavifation, handleTypeofPositionChange, } = NavsState();
  const { authenticated } = DataBaseState();

  // Reset Options
  const resetToLightMode = () => {
    handleAutoMode(); 
    setSidebar_Color_Change('Dark');
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

          <Toggle_Theme />

          {authenticated &&(
            <>
              <Diviser />
              <Choose_Color />
              <Diviser />

              {/* Chosse the type of Navigation */}
              <div className='Type_Of_Navigations'>
                  <div className='Text'> 
                    <h1>Navigation Position</h1>
                    <span>Select a suitable navigation system for your web application</span>
                  </div>
                  <div className='Choose_The_Type'>
                    <select 
                      name="Navigation Position" 
                      value={screenWidth < 1000 ? "Mobile_Menu" : typeOfNavifation} 
                      onChange={handleTypeofPositionChange} 
                      disabled={screenWidth < 1000}
                    >
                      <option value="Sidebar_Home">SideBar</option>
                      <option value="Top_Nav_Navigation">Top Navigation</option>
                      <option value="Mobile_Menu">Mobile Menu</option>
                    </select>
                  </div>
                </div>  
              {/* Chosse the type of Navigation */} 
            </>
          )}

        </div>
      </nav>
    </>
  )
};

export default Custumize_Sidebar;