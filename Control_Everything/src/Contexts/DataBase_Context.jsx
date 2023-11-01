import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Utili from '../Imports/utilis';
import { NavsState } from './Navs_Context';
import { BASE_URL } from '../config/urls';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as jwt_decode from "jwt-decode";

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

    const isCountryValid = await Utili.valideCountry(country);
    if (!isCountryValid) {
      setAlert({
        open: true,
        message: "Invalid country",
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

    try{

      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        email,
        password,
        fullName,
        confirmPassword,
        dateOfBirth,
        country,
        gender
      });

      setAlert({
        open: true,
        message: "Email to activate account sent",
        type: 'success'
      });
    }catch (error) {
      console.log('Entrou nos erros')
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        console.log("Error message from server:", errorMessage);
    
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  }

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password ) {
      setAlert({
        open: true,
        message: "All fields must be filled",
        type: 'error'
      });

      return
    }

    if (!Utili.validateEmail(email)) {
      setAlert({
        open: true,
        message: "Invalid email format",
        type: 'error'
      });
      
      return;
    }
    
    try {

      const response = await axios.post(`${BASE_URL}/auth/signin`, {
        email: email,
        password: password,
      });

      const { token, id } = response.data;
      if (token) {
        sessionStorage.setItem('token', token);
        var decoded = jwt_decode.jwtDecode(token);
        Cookies.set('token', token);
        Cookies.set('id', decoded.id);
      }

      setTimeout(() => {
        navigate('/CE/Dashboard');
        window.location.reload();
      }, 3000);

      setAuthenticated(true);

    } catch (error) {
      console.log("Deu erro")
      console.log(error);
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        console.log(errorMessage)
      }
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
        signup,
        login
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






