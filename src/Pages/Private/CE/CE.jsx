import React from 'react';
import './CE.scss';
import Private_Routes from '../../../Routes/Private_Routes';
import Header_Home from '../../../Containers/Headers/Header_Home/Header_Home';

const CE = () => {

  return (
    <>
      <Header_Home />

      <div className='CE'>
        <div>
          <Private_Routes />  
        </div>
      </div>  
    </>
  )
};

export default CE;
