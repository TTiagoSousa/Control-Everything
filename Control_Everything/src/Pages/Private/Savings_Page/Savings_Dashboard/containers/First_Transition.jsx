import React from 'react';
import '../Savings_Dashboard.scss';
import * as Component from '../../../../../Imports/components';

const First_Transition = () => {

  return (
    <div className='First_Transition'>
      <div className='Title'>
        <div className='First_Title'>
          <h1>Savings</h1>
          <h1>dashboard</h1>
        </div>
        <h1>Add your first transition</h1>
      </div>
      <div className='Form_Container'>
        <form>
          <div className='Text_Field'>
            <span>Transition Type:</span>
            <span className='Type'>Deposit</span>
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Currency"
              Type="text"
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Data"
              Type="date"
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Hour"
              Type="hour"
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Platform"
              Type="text"
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Amount"
              Type="text"
            />
          </div>
          <div className="Button_Field">
            <Component.Global_Button 
              Text="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default First_Transition;
