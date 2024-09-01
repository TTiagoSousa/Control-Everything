import React, { createContext, useContext, useState } from 'react';

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const [ authenticated, setAuthenticated ] = useState(false);

  return (
    <DataBase.Provider 
      value={{ 
        authenticated, setAuthenticated,
      }}
    >
      {children}
    </DataBase.Provider>
  );
};

export default DataBaseContext;

export const DataBaseState = () => { 
  return useContext(DataBase);
};