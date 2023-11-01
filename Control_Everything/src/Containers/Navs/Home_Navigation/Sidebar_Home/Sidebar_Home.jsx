import React from 'react';
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Color from '../../../../Styles/Colors';
import './Sidebar_Home.scss'
import { ThemeState } from '../../../../Contexts/Theme_Context';

const Sidebar_Home = () => {

  const { sidebar_Home } = NavsState();
  const { sidebar_Color_Change } = ThemeState();

  // Styles
    const sidebarStyle = {
      backgroundColor: 
        sidebar_Color_Change === 'Dark' ? Color.secundery_color_dark : 
        sidebar_Color_Change === 'Blue' ? Color.blue : '',
    };
  // Styles

  return (
    <nav className={`SideBar_Home ${sidebar_Home ? '' : 'active'}`} style={sidebarStyle}></nav>
  )
};

export default Sidebar_Home;
