// React and scss
  import React, { useState } from 'react';
  import '../../Auth.scss';
// React and scss

// Internal Imports
  import * as Component from '../../../../../Imports/components';
// Internal Imports

// Context
  import { DataBaseState } from '../../../../../Contexts/DataBase_Context';  
// Context

const Sign_Up_Form = () => {

  const { 
    fullName, setFullName,
    email, setEmail,
    password, setPassword,
    dateOfBirth, setDateOfBirth,
    country, setCountry,
    confirmPassword, setConfirmPassword,
    gender, setGender,
    signup
   } = DataBaseState();

  return (
    <>
      <form action="#" className="Sign_Up_Form">
        <h1>Sign up</h1>
        <div className="Input_Field">
          <Component.Global_Input 
            Type="email"
            Text="Email"
            Value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Full Name"
            Type="text"
            Value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Birthday"
            Type="date"
            Value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Country"
            Type="text"
            Value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Gender"
            Type="text"
            Value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input
            Text="Passoword" 
            Type="password"
            Value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input
            Text="Confirm Passoword" 
            Type="password"
            Value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Button 
            Text="Register"
            onClick={signup}
          />
        </div>
      </form>   
    </>
  )
}

export default Sign_Up_Form;