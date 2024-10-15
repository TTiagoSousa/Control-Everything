import React, { useState, createContext, useContext, useEffect } from 'react';

const Theme = createContext({});

const ThemeContext = ({ children }) => {

  // Change Sidebar Color
    const [sidebar_Color_Change, setSidebar_Color_Change] = useState(() => {
      const storedColor = localStorage.getItem('sidebar_Color_Change');
      return storedColor ? storedColor : 'Dark';
    });

    const handle_Sidebar_Color_Change = (e) => {
      const color = e.target.value;
      setSidebar_Color_Change(color);
    };

    useEffect(() => {
      localStorage.setItem('sidebar_Color_Change', sidebar_Color_Change);
    }, [sidebar_Color_Change]);
  // Change Sidebar Color

  return (
    <Theme.Provider value={{ 
      sidebar_Color_Change, setSidebar_Color_Change, handle_Sidebar_Color_Change
      }}>
      {children}
    </Theme.Provider>
  )

};

export default ThemeContext;

export const ThemeState = () => {
  return useContext(Theme);
};