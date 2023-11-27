import React from 'react';
import './Savings_Dashboard.scss'
import useFetchTotalTransitions from '../../../../Hooks/Saving_Transitions/useFetchTotalTransitions';
import First_Transition from './containers/First_Transition';
import useCreateFirstSavingTransition from '../../../../Hooks/Saving_Transitions/useCreateFirstSavingTransition';

const Savings_Dashboard = () => {

  const {totalTransitions, setTotalTransitions} = useFetchTotalTransitions();

  const { 
    createFirstSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    loading
  } = useCreateFirstSavingTransition(null);

  const firstTransitionProps = {
    createFirstSavingTransaction,    
    date, setDate,
    hour, setHour,
    amount, setAmount,
    platform, setPlatform,
    currencyType, setCurrencyType,
    totalTransitions, setTotalTransitions
  };

  return (
    <div className='Savings_Dashboard'>
      {totalTransitions === null ? (
        <section className='Loading'></section>
      ) : totalTransitions === 0 ? (
        <First_Transition {...firstTransitionProps}/>
      ) : (
        <>
          Ja deu
        </>
      )}
    </div>
  )
}

export default Savings_Dashboard;