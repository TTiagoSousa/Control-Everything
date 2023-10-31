import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState ('');
  const [country, setCountry] = useState ('');
  const [confirmPassword, setConfirmPassword ] = useState('');

  return (
    <DataBase.Provider 
      value={{ 
        fullName, setFullName,
        email, setEmail,
        password, setPassword,
        dateOfBirth, setDateOfBirth,
        country, setCountry,
        confirmPassword, setConfirmPassword,
        gender, setGender,
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






