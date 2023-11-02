import React, { useState, useEffect, useRef } from 'react';
import '../Custumize_Sidebar.scss';
import { NavsState } from '../../../../Contexts/Navs_Context';
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';

const Type_Of_Navigations = () => {

  const { handleTypeofPositionChange, typeOfNavifation } = NavsState();

  const [open, setOpen] = useState(false);

  let menuRefe = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRefe.current.contains(e.target)) {
        setTimeout(() => {
          setOpen(false);
        }, 1000); // Atraso de 1 segundo
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const iconClassName = `Arrow ${open ? 'active' : ''}`;

  return (
    <div className='Type_Of_Navigations' ref={menuRefe}>
      <div className='Text'> 
        <h1>Navigation Position</h1>
        <span>Select a suitable navigation system for your web application</span>
      </div>
      <div className='Choose_The_Type' onClick={()=>{setOpen(!open)}}>
        <div>
          <span>Select Value:</span>
          <span>{typeOfNavifation}</span>
        </div>
        <div className='Icon'> 
          <div className={iconClassName}>
            <Icon.Simple_Triangle  Global_Color={Color.whitte}/>
          </div>
        </div>
      </div>
      <div className={`Navigation_Options ${open? 'active' : 'inactive'}`}>
        <div><span>Sidebar</span></div>
        <div><span>Mobile Menu</span></div>
      </div>
    </div>  
  )
};

export default Type_Of_Navigations;
