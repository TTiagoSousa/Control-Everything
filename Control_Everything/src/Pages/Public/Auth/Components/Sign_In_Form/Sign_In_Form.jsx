// React and scss
  import React, { useState } from 'react';
  import '../../Auth.scss'
// React and scss

// Internal Imports
  import * as Component from '../../../../../Imports/components';
// Internal Imports

const Sign_In_Form = ({ Children }) => {

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>Sign in</h1>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Email"
            Type="email"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Password"
            Type="password"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Button 
            Text="Login"
          />
        </div>
        {Children}
      </form>   
    </>
  )
}

export default Sign_In_Form