// React More CSS
  import React, { createContext, useContext, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
// React More CSS

// Internal Imports
  import * as Utili from '../Imports/utilis';
// Internal Imports

// Context
  import { NavsState } from './Navs_Context';
// Context

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

  const signup  = async (e) => {  
    e.preventDefault();

    const isCountryValid = await Utili.valideCoutry(country);
    if (!isCountryValid) {
      setAlert({
        open: true,
        message: "Invalid country",
        type: 'error'
      });
      return;
    }

    if (!email || !password || !fullName || !gender || !dateOfBirth || !country || !confirmPassword) {
      setAlert({
        open: true,
        message: "All fields must be filleds",
        type: 'error'
      });

      return;
    }

    if (!Utili.validateEmail(email)) {
      setAlert({
        open: true,
        message: "Invalid email format",
        type: 'error'
      });
      
      return;
    }

    if (!Utili.calculateUserAge(dateOfBirth)) {
      setAlert({
        open: true,
        message: "You must be at least 16 years old to create an account.",
        type: 'error'
      });
  
      return;
    }

    if (!Utili.isPasswordStrong(password)) {
      setAlert({
        open: true,
        message: "Password is not strong enough",
        type: 'error'
      });
      
      return;
    }

    if(!Utili.containsOnlyLetters(fullName)) {
      setAlert({
        open: true,
        message: "Full name must contain only letters",
        type: 'error'
      });
      
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: 'error'
      });

      return;
    }

  }

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
        signup
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






