import React, { useEffect } from 'react';
import './Savings_Dashboard.scss';
import { useTranslation } from 'react-i18next';
import BarChartTotalPerMonth from './Containers/barChartTotalPerMonth';
import useFetchGetTotalPerMonth from '../../../../../Hooks/Savings_Transitions/useFetchGetTotalPerMonth';
import useLoading from '../../../../../Hooks/Loading/useLoading';
import Loading_Balls from '../../../../../Components/Loading/Loading_Balls/Loading_Balls';
import useFetchGetTotalOnSavingsTransitionsConverted from '../../../../../Hooks/Savings_Transitions/useFetchGetTotalOnSavingsTransitionsConverted';

const Savings_Dashboard = () => {

  const { t } = useTranslation();
  const { isLoading, setIsLoading } = useLoading();
  const { totalOnSavings } = useFetchGetTotalOnSavingsTransitionsConverted();

  const { chartData, currencies } = useFetchGetTotalPerMonth();

  console.log(chartData, currencies);

  useEffect(() => {
    if (chartData && currencies) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [chartData, currencies, setIsLoading]);

  // Garantir que os dados estejam prontos antes de renderizar o gráfico
  if (isLoading) {
    return <div className="Loading"><Loading_Balls count={6} /></div>;
  }

  return (
    <div className='Savings_Dashboard'>

      <div className='Totals'>
        <div className='Total_On_Savings'>
          <div>
            {isLoading || totalOnSavings === null ? (
              <>
                <span>{t('Total on savings')}</span>
                <span>-</span>
                <span>{t('Loading')}</span>
              </>
            ) : totalOnSavings === null ? ( 
              <>
                <span>{t('Total on savings')}</span>
                <span>-</span>
                <span>{t('Loading')}</span>
              </>
            ) : (
              <>
                <span>{t('Total on savings')}</span>
                <span>-</span>
                <span>{totalOnSavings.totalConverted}</span>
                <span>{totalOnSavings.targetSymbol}</span>
              </>
            )}
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