import React from 'react';
import './CE.scss';
import Private_Routes from '../../../Routes/Private_Routes';
import Header_Home from '../../../Containers/Headers/Header_Home/Header_Home';
import { NavsState } from '../../../Contexts/Navs_Context';
import Sidebar_Home from '../../../Containers/Navigation_Home/Sidebar_Home/Sidebar_Home';
import Mobile_Menu_Home from '../../../Containers/Navigation_Home/Mobile_Menu_Home/Mobile_Menu_Home';
import Custumize_Sidebar from '../../../Containers/Navs/Custumize_Sidebar/Custumize_Sidebar';

const CE = () => {

  const { typeOfNavifation } = NavsState();

  function getNavClass() {
    switch (typeOfNavifation) {
      case "Sidebar_Home":
        return "Container_Sidebar";
      case "Mobile_Menu":
        return "Container_With_MobileMenu";
      default:
        console.log("Invalid position");
        return "";
    }
  }

  return (
    <>
      <Header_Home />
      <Custumize_Sidebar />

      {
        typeOfNavifation === "Sidebar_Home" ? (
          <Sidebar_Home />
        ) : typeOfNavifation === "Mobile_Menu" ? (
          <Mobile_Menu_Home />
        ) : null
      }

      <div className='CE'>
        <div className={getNavClass()}>
          <Private_Routes />  
        </div>
      </div>  
    </>
  )
};

export default CE;
