import React from 'react';
import './Savings_Dashboard.scss';
import { useTranslation } from 'react-i18next';
import BarChartTotalPerMonth from './Containers/barChartTotalPerMonth';
import useFetchGetTotalPerMonth from '../../../../../Hooks/Savings_Transitions/useFetchGetTotalPerMonth';
import useLoading from '../../../../../Hooks/Loading/useLoading';
import Loading_Balls from '../../../../../Components/Loading/Loading_Balls/Loading_Balls';

const Savings_Dashboard = () => {

  const { t } = useTranslation();
  const { isLoading, setIsLoading } = useLoading();

  const { chartData, currencies } = useFetchGetTotalPerMonth();

  console.log(chartData, currencies);

  // Garantir que os dados estejam prontos antes de renderizar o gráfico
  if (!chartData || !currencies) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Savings_Dashboard'>

      <div className='Totals'>
        <div className='Total_On_Savings'>
          <div>
            <span>{t('Total on savings')}</span>
            <span>-</span>
            <span>600</span>
            <span>$</span>
          </div>
        </div>
        <div className='Savings_Pie_Chart'>
          <div className='Contente'>
          {isLoading || chartData.length === 0 ? (
            <div className='Loading'>
              <Loading_Balls count={6} />
            </div>
            ) : (
              currencies.length === 0 ? (
                <div className='No_Transition'>
                  <span>{t('No transitions')}</span>
                </div>
              ) : (
                <BarChartTotalPerMonth chartData={chartData} currencies={currencies} />
              )
            )}
          </div>
        </div>
      </div>
    
    </div>
  )
};

export default Savings_Dashboard;