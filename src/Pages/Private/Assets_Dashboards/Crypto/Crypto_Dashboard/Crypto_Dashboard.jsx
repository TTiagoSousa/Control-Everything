import React from 'react';
import './Crypto_Dashboard.scss';
import Crypto_Portefolio_Table from './Containers/Crypto_Portefolio_Table';

const Crypto_Dashboard = () => {
  
  return (
    <div className='Crypto_Dashboard'>
      <Crypto_Portefolio_Table />
    </div>
  )
}

export default Crypto_Dashboard;
