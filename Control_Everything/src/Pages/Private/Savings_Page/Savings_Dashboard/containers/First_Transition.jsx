import React from 'react';
import '../Savings_Dashboard.scss';
import * as Component from '../../../../../Imports/components';
import useCreateFirstSavingTransition from '../../../../../Hooks/Saving_Transitions/useCreateFirstSavingTransition';

const First_Transition = () => {

  const { 
    createFirstSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    transitiontype, setTransitiontype
  } = useCreateFirstSavingTransition(null);

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
              Value={currencyType}
              onChange={(e) => setCurrencyType(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Data"
              Type="date"
              Value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Hour"
              Type="hour"
              Value={hour}
              onChange={(e) => setHour(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Platform"
              Type="text"
              Value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Component.Global_Input 
              Text="Amount"
              Type="text"
              Value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="Button_Field">
            <Component.Global_Button 
              Text="Submit"
              onClick={createFirstSavingTransaction}
            />
          </div>
        </form>
      </div>
      <div className='Alert'>
        <Component.Mui_Alert />
      </div>
    </div>
  )
}

export default First_Transition;
