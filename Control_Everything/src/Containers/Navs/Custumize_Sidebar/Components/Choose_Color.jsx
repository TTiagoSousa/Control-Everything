import React, { useState, useEffect, useRef } from 'react';
import '../Custumize_Sidebar.scss';
import { ThemeState } from '../../../../Contexts/Theme_Context';
import * as Icon from '../../../../Imports/icons';
import * as Color from '../../../../Styles/Colors';

const Choose_Color = () => {

  const { sidebar_Color_Change, handle_Sidebar_Color_Change, setSidebar_Color_Change } = ThemeState();

  const [open, setOpen] = useState(false);

  let menuRefe = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRefe.current.contains(e.target)) {
        setTimeout(() => {
          setOpen(false);
        }, 500); 
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleColorSelection = (color) => {
    setSidebar_Color_Change(color);
    handle_Sidebar_Color_Change({ target: { value: color } });
  };

  const iconClassName = `Arrow ${open ? 'active' : ''}`;

  return (
    <div className="Choose_Color" ref={menuRefe}>
      <div className="Text" >
        <h1>Choose a color to Sidebar</h1>
        <span>What's your color?</span>
      </div>
      <div className='Choose_Type_Color' onClick={()=>{setOpen(!open)}} >
        <div>
          <span>Select Value:</span>
          <span>{sidebar_Color_Change}</span>
        </div>
        <div className='Icon'> 
          <div className={iconClassName}>
            <Icon.Simple_Triangle  Global_Color={Color.whitte}/>
          </div>
        </div>
      </div >
        <div className={`Colors_Options ${open? 'active' : 'inactive'}`}>
          <div className='Dark' onClick={() => handleColorSelection("Dark")}><span>Dark</span></div>
          <div className='Blue' onClick={() => handleColorSelection("Blue")}><span>Blue</span></div>
        </div>
    </div>
  )
}

export default Choose_Color;
