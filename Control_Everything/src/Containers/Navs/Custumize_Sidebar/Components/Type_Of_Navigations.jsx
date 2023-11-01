import React, { useEffect, useState } from 'react';
import '../Custumize_Sidebar.scss';
import { NavsState } from '../../../../Contexts/Navs_Context';

const Type_Of_Navigations = () => {

  const { handleTypeofPositionChange, typeOfNavifation } = NavsState();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='Type_Of_Navigations'>
      <div className='Text'> 
        <h1>Navigation Position</h1>
        <span>Select a suitable navigation system for your web application</span>
      </div>
      <div className='Choose_The_Type'>
        <select 
          name="Navigation Position" 
          value={screenWidth < 1000 ? "Mobile_Menu" : typeOfNavifation} 
          onChange={handleTypeofPositionChange} 
          disabled={screenWidth < 1000}
        >
          <option value="Sidebar_Home">SideBar</option>
          <option value="Top_Nav_Navigation">Top Navigation</option>
          <option value="Mobile_Menu">Mobile Menu</option>
        </select>
      </div>
    </div>  
  )
};

export default Type_Of_Navigations;
