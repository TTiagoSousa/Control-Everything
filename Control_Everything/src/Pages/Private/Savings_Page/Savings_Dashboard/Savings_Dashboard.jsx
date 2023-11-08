import React from 'react';
import './Savings_Dashboard.scss'
import useFetchTotalTransitions from '../../../../Hooks/Saving_Transitions/useFetchTotalTransitions';

const Savings_Dashboard = () => {

  const totalTransitions = useFetchTotalTransitions();

  return (
    <div className='Savings_Dashboard'></div>
  )
}

export default Savings_Dashboard;