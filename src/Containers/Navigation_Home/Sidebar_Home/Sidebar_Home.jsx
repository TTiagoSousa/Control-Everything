import React from 'react';
import './Sidebar_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import { PanelMenu } from 'primereact/panelmenu';
import { navItems } from '../Navigation_Map';

const Sidebar_Home = () => {

  const { sidebar_Home } = NavsState();

  return (
    <nav className="SideBar_Home">
      <PanelMenu model={navItems} />
    </nav>
  );
};

export default Sidebar_Home;