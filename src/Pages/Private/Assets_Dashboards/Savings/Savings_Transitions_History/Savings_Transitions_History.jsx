import React, { useState } from 'react';
import './Savings_Transitions_History.scss';
import Savings_Transitions_History_Table from './Containers/Savings_Transitions_History_Table';
import Update_Saving_Transition from '../../../../../Containers/Forms/Savings/Update_Saving_Transition/Update_Saving_Transition';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Savings_Transitions_History = () => {

  const [ openForm, setOpenForm ] = useState(false);
  const [ selectedTransition, setSelectedTransition ] = useState('')

  const handleOpenForm = () => {
    setOpenForm(true); // Abre o formulário
  };

  return (
    <div className='Savings_Transitions_History'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <Update_Saving_Transition 
        openForm={openForm}
        setOpenForm={setOpenForm}
        selectedTransition={selectedTransition}
      />

      <Savings_Transitions_History_Table 
        selectedTransition={selectedTransition}
        setSelectedTransition= {setSelectedTransition}
        handleOpenForm={handleOpenForm}
      />

    </div>
  )
};

export default Savings_Transitions_History;
