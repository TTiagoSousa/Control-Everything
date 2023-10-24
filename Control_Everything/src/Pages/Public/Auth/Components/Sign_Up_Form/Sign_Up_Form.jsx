// React and scss
  import React, { useState } from 'react';
  import '../../Auth.scss';
// React and scss

// Internal Imports
  import * as Component from '../../../../../Imports/components';
// Internal Imports

const Sign_Up_Form = () => {

  return (
    <>
      <form action="#" className="Sign_Up_Form">
        <h1>Sign up</h1>
        <div className="Input_Field">
          <Component.Global_Input 
            Type="email"
            Text="Email"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Full Name"
            Type="text"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Birthday"
            Type="date"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Coutry"
            Type="text"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Gender"
            Type="text"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input
            Text="Passoword" 
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input
            Text="Confirm Passoword" 
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Button 
            Text="Register"
          />
        </div>
      </form>   
    </>
  )
}

export default Sign_Up_Form;