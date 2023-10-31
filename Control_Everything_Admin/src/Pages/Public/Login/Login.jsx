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
      <input 
        type="email" 
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </>
  )
};

export default Login;