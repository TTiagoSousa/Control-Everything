// React More CSS
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
// React More CSS

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

return (
  <DataBase.Provider 
    value={{ 

    }}
  >
    {children}
  </DataBase.Provider>
)

};

export default DataBaseContext;

export const DataBaseState = () => {
return useContext(DataBase);
};