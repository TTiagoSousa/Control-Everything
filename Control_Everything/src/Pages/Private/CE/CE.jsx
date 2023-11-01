import React, { useState } from 'react';
import './CE.scss';
import * as Container from '../../../Imports/containers';
import { NavsState } from '../../../Contexts/Navs_Context';

const CE = () => {

  const { typeOfNavifation } = NavsState();

  return (
    <>

      <Container.Header_Home />
      <Container.Custumize_Sidebar/>

      {
        typeOfNavifation === "Sidebar_Home" ? (
          <Container.Sidebar_Home />
        ) : typeOfNavifation === "Mobile_Menu" ? (
          <Container.Mobile_Sidebar_Home />
        ) : null
      }

      <div className='CE'></div>

    </>
  )
};

export default CE;