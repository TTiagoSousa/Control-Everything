import React, { useState } from 'react';
import './CE.scss';
import * as Container from '../../../Imports/containers';

const CE = () => {

  return (
    <>

      <Container.Header_Home />
      <Container.Sidebar_Home />
      <Container.Custumize_Sidebar/>

      <div className='CE'></div>

    </>
  )
};

export default CE;