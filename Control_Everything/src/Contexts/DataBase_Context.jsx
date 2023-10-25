// React More CSS
  import React, { createContext, useContext, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
// React More CSS

// Context
  import { NavsState } from './Navs_Context';
// Context

import { signup } from '../Services/Auth/signup';

const DataBase = createContext({});

const DataBaseContext = ({ children }) => {

  const { setAlert } = NavsState();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState ('');
  const [country, setCountry] = useState ('');
  const [confirmPassword, setConfirmPassword ] = useState('');

  const handleSignup = async () => {

    const response = await signup({
      fullName,
      email,
      password,
      dateOfBirth,
      country,
      gender,
      confirmPassword
    });

  };

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
        handleSignup
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






