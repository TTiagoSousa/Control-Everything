import React from 'react';
import './Mobile_Menu_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import { PanelMenu } from 'primereact/panelmenu';
import { navItems } from '../Navigation_Map';
import Dark_Div from '../../../Components/Dark_Div/Dark_Div';

const Mobile_Menu_Home = () => {

  const { mobile_Sidebar_Home, set_Mobile_Sidebar_Home } = NavsState();

  
  return (
    <>

      <Dark_Div
        toggled={set_Mobile_Sidebar_Home}
        toggle={mobile_Sidebar_Home}
      />

      <nav className={`Mobile_Sidebar_Home ${mobile_Sidebar_Home ? 'active' : ''}`} >
        <PanelMenu model={navItems} />
      </nav>
    </>
  );
};

export default Mobile_Menu_Home;