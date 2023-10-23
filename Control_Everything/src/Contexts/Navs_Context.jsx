// React More CSS
import React, { useState, createContext, useContext, useEffect } from 'react';
// React More CSS

const Navs = createContext({});

const NavsContext = ({ children }) => {

  // Customize Sidebar
    const [ customize_Sidebar, setCustomize_Sidebar ] = useState(false);
    const showCustomize_Sidebar = () => setCustomize_Sidebar(!customize_Sidebar);
  // Customize Sidebar

  return (
    <Navs.Provider 
      value={{ 
        customize_Sidebar, setCustomize_Sidebar, showCustomize_Sidebar,
      }}
    >
      {children}
    </Navs.Provider>
  )

};

export default NavsContext;

export const NavsState = () => {
  return useContext(Navs);
};