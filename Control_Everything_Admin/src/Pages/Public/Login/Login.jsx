// React and scss
  import React from 'react';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
// React and scss

const Login = () => {

  const { 
    login, 
    email, setEmail,
    password, setPassword
  } = DataBaseState();

  return (
    <>

    </>
  )
};

export default Login;