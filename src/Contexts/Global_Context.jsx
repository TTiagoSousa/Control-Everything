import React, { useState, createContext, useContext, useEffect } from 'react';

const Global = createContext({});

const GlobalContext = ({ children }) => {
  
  // Currency
    const storedCurrency = localStorage.getItem('selectCurrency');
    const [selectCurrency, setSelectCurrency] = useState(storedCurrency || "52f30dcd-2c01-4c99-b982-02b313dfb6e5");

    useEffect(() => {
      // Update the local storage whenever selectCurrency changes
      localStorage.setItem('selectCurrency', selectCurrency);
    }, [selectCurrency]);
  // Currency 
    console.log(selectCurrency)
  return (
    <Global.Provider 
      value={{ 
        selectCurrency, setSelectCurrency
      }}
    >
      {children}
    </Global.Provider>
  )

};

export default GlobalContext;

export const GlobalState = () => {
  return useContext(Global);
};