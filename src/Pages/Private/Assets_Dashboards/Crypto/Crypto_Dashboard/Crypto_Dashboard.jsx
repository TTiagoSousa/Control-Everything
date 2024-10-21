import React, { useEffect } from 'react';
import './Crypto_Dashboard.scss';
import { useTranslation } from 'react-i18next';
import useLoading from '../../../../../Hooks/Loading/useLoading';
import useFetchCryptoPortefolio from '../../../../../Hooks/Crypto_Transitions/useFetchCryptoPortefolio';
import Crypto_Portefolio_Table from './Containers/Crypto_Portefolio_Table';

const Crypto_Dashboard = () => {

  const { t } = useTranslation();
  const { isLoading, setIsLoading } = useLoading();

  return (
    <div className='Crypto_Dashboard'>
      <Crypto_Portefolio_Table />
    </div>
  )
};

export default Crypto_Dashboard;