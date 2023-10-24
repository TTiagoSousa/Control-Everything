// React and scss
  import React, { Children, useState } from 'react';
  import '../../Auth.scss'
// React and scss

// Internal Imports
  import * as Component from '../../../../../Imports/components';
// Internal Imports

const Recover_Password_Form = ({ Children }) => {

  return (
    <>
      <form action="#" className="Sign_In_Form">
        <h1>Recover Password</h1>
        <div className="Input_Field">
          <Component.Global_Input 
            Text="Email"
            Type="email"
          />
        </div>
        <div className="Input_Field">
          <Component.Global_Button 
            Text="Recover Password"
          />
        </div>
        {Children}
      </form>   
    </>
  )
};

export default Recover_Password_Form;