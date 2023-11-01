import React from 'react';
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Color from '../../../../Styles/Colors';
import './Sidebar_Home.scss'

const Sidebar_Home = () => {

  const { sidebar_Home } = NavsState();

  // Styles
    const sidebarStyle = { backgroundColor: Color.secundery_color_dark};
  // Styles

  return (
    <nav className={`SideBar_Home ${sidebar_Home ? '' : 'active'}`} style={sidebarStyle}></nav>
  )
};

export default Sidebar_Home;
