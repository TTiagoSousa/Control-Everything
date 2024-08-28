import React, { useEffect, useState } from 'react';
import './Crypto_Dashboard.scss';
import Crypto_Portefolio_Table from './Containers/Crypto_Portefolio_Table';
import useFetchTotalSpentAndCurrentInvestment from '../../../../../Hooks/Crypto_Transitions/useFetchTotalSpentAndCurrentInvestment';
import Pie_Chart_Total_Spent from './Containers/Charts/Pie_Chart_Total_Spent';
import Loading_Balls from '../../../../../Components/Loading/Loading_Balls/Loading_Balls';
import Pie_Chart_Investment_Percentage from './Containers/Charts/Pie_Chart_Investment_Percentage';
import { useTranslation } from 'react-i18next';
import * as Icon from '../../../../../Imports/icons';
import * as Color from '../../../../../Styles/Colors';
import Pie_Chart_Total_Spent_And_Current_Investment_Zoom from './Containers/Zoom/Pie_Chart_Total_Spent_And_Current_Investment_Zoom';

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
  
  const [ pieChartsZoom, setPieChartsZoom ] = useState(false)

  const handleZoomCharts = () => {
    setPieChartsZoom(true);
  };

  console.log(pieChartsZoom)

  return (
    <div className='Crypto_Dashboard'>

      {pieChartsZoom && (
        <Pie_Chart_Total_Spent_And_Current_Investment_Zoom
          pieChartsZoom={pieChartsZoom}
          setPieChartsZoom={setPieChartsZoom}
          totalSpentAndCurrentInvestment={totalSpentAndCurrentInvestment}
          isLoading={isLoading}
        />
      )}

      <div className='Pie_Charts'>
        <div className='Total_Spent'>
          <div className='Header'>
            <span className='Title'>{t('Total spent')}</span>
            <button onClick={handleZoomCharts}>
              <span>{t('Expand charts')}</span>
              <div className='Icon'>
                <Icon.Zoom_In Global_Color={Color.orange}/>
              </div>
            </button>
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
            <span className='Title'>{t('Current investment')}</span>
            <button onClick={handleZoomCharts}> 
              <span>{t('Expand charts')}</span>
              <div className='Icon'>
                <Icon.Zoom_In Global_Color={Color.orange}/>
              </div>
            </button>
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
