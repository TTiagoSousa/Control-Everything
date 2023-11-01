import React from 'react';
import './Mobile_Sidebar_Home.scss'
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Component from '../../../../Imports/components';

const Mobile_Sidebar_Home = () => {

  const { mobile_Sidebar_Home, set_Mobile_Sidebar_Home } = NavsState();

  return (
    <>

      <Component.Dark_Div 
        toggled={set_Mobile_Sidebar_Home}
        toggle={mobile_Sidebar_Home}
      />

      <nav className={`Mobile_Sidebar_Home ${mobile_Sidebar_Home ? 'active' : ''}`} ></nav>
    </>
  )
}

export default Mobile_Sidebar_Home;