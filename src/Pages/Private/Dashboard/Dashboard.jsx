import React, { useEffect, useState } from 'react';
import './Dashboard.scss'; 
import useFetchGetTotalHeritageConverted from '../../../Hooks/Heritage/useFetchGetTotalHeritageConverted';
import Loading_Balls from '../../../Components/Loading/Loading_Balls/Loading_Balls';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {

  const { t } = useTranslation();

  const { totalHeritage } = useFetchGetTotalHeritageConverted();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const delay = 1500;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, []);

  console.log(totalHeritage)

  return (
    <div className='Dashboard'>
      <div className='Total_Heritage'>
        <div className="Header">
          <span>{t('Total heritage')}</span>
        </div>
        <div className="Body">
          {isLoading || totalHeritage === null ? (
            <div className='Loading'>
              <Loading_Balls count={6}/>
            </div>
          ) : totalHeritage.length === 0 ? (
            <div className='No_Transition'>
              <span>{t("No transitions")}</span>
            </div>
          ) : (
            <div className='Contente'>
              <span>{totalHeritage.totalConverted}</span>
              <span>{totalHeritage.targetSymbol}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Dashboard;