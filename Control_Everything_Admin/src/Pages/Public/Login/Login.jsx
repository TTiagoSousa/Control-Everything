import React from 'react';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
import * as Component from '../../../Imports/components';

const Login = () => {

  const { 
    login, 
    email, setEmail,
    password, setPassword
  } = DataBaseState();

  return (
    <>
      <div className='Login'>
        <form>

        </form>
      </div>
    </>
  )
};

export default Login;