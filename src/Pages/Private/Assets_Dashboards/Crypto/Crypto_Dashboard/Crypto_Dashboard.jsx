import React, { useEffect, useState } from 'react';
import './Crypto_Dashboard.scss';
import Crypto_Portefolio_Table from './Containers/Crypto_Portefolio_Table';
import useFetchTotalSpentAndCurrentInvestment from '../../../../../Hooks/Crypto_Transitions/useFetchTotalSpentAndCurrentInvestment';
import Pie_Chart_Total_Spent from './Containers/Pie_Chart_Total_Spent';
import Loading_Balls from '../../../../../Components/Loading/Loading_Balls/Loading_Balls';
import Pie_Chart_Investment_Percentage from './Containers/Pie_Chart_Investment_Percentage';
import { useTranslation } from 'react-i18next';

const Crypto_Dashboard = () => {

  const { t } = useTranslation();

  const { totalSpentAndCurrentInvestment } = useFetchTotalSpentAndCurrentInvestment();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const delay = 1500;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, []);
  
  return (
    <div className='Crypto_Dashboard'>
      <div className='Pie_Charts'>
        <div className='Total_Spent'>
          <div className='Header'>
            <span>{t('Total spent')}</span>
          </div>
          <div className='Body'>
            {isLoading || totalSpentAndCurrentInvestment === null ? (
              <div className='Loading'>
                <Loading_Balls count={6}/>
              </div>
            ) : totalSpentAndCurrentInvestment.length === 0 ? (
              <div className='No_Transition'>
                <span>{t("No transitions")}</span>
              </div>
            ) : (
              <Pie_Chart_Total_Spent data={totalSpentAndCurrentInvestment} />
            )}
          </div>
        </div>
        <div className='Current_Investment'>
          <div className='Header'>
            <span>{t('Current investment')}</span>
          </div>
          <div className='Body'>
            {isLoading || totalSpentAndCurrentInvestment === null ? (
              <div className='Loading'>
                <Loading_Balls count={6}/>
              </div>
            ) : totalSpentAndCurrentInvestment.length === 0 ? (
              <div className='No_Transition'>
                <span>{t("No transitions")}</span>
              </div>
            ) : (
              <Pie_Chart_Investment_Percentage data={totalSpentAndCurrentInvestment} />
            )}
          </div>
        </div>
      </div>
      <Crypto_Portefolio_Table />
    </div>
  )
}

export default Crypto_Dashboard;
