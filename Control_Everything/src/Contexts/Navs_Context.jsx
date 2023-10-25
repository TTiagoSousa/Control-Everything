// React More CSS
import React, { useState, createContext, useContext, useEffect } from 'react';
// React More CSS

const Navs = createContext({});

const NavsContext = ({ children }) => {

  // Customize Sidebar
    const [ customize_Sidebar, setCustomize_Sidebar ] = useState(false);
    const showCustomize_Sidebar = () => setCustomize_Sidebar(!customize_Sidebar);
  // Customize Sidebar

  // Alert  
    const [ alert, setAlert ] = useState({
      open: false, // Alert Close
      message: "", // Alert message
      type: "", // type of alert
    })
  // Alert

  return (
    <Navs.Provider 
      value={{ 
        customize_Sidebar, setCustomize_Sidebar, showCustomize_Sidebar,
        alert, setAlert
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