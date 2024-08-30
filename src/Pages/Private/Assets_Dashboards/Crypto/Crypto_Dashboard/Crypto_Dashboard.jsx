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
import useFetchGetTotalOnCryptoConverted from '../../../../../Hooks/Crypto_Transitions/useFetchGetTotalOnCryptoConverted';
import useFetchGetPortfolioEvolution from '../../../../../Hooks/Crypto_Transitions/useFetchGetPortfolioEvolution';
import Line_Chart_Portefolio_Evolution from './Containers/Charts/Line_Chart_Portefolio_Evolution';

const Crypto_Dashboard = () => {

  const { t } = useTranslation();

  const { totalSpentAndCurrentInvestment } = useFetchTotalSpentAndCurrentInvestment();
  const { totalOnCrypto } = useFetchGetTotalOnCryptoConverted();
  const { data } = useFetchGetPortfolioEvolution();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const delay = 3500;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, []);
  
  const [ pieChartsZoom, setPieChartsZoom ] = useState(false)

  const handleZoomCharts = () => {
    setPieChartsZoom(true);
  };

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

      <div className='Totals'>
        <div className='Total_Crypto'>
          <div className="Header">
            <span>{t('Total in crypto')}</span>
          </div>
          <div className='Body'>
            <div className='Content'>
              {isLoading || totalOnCrypto === null ? (
                <div className='Loading'>
                  <Loading_Balls count={6}/>
                </div>
              ) : totalOnCrypto === null ? ( 
                <div className='Loading'>
                  <Loading_Balls count={6}/>
                </div>
              ) : (
                <>
                  <div style={{ color: crypto.returnPercentage > 0 ? Color.green : Color.red }}>
                    <span>{totalOnCrypto.totalConverted}</span>
                    <span>{totalOnCrypto.targetSymbol}</span>
                  </div>
                  <span className='Diviser'>/</span>
                  <div style={{ color: crypto.returnPercentage > 0 ? Color.green : Color.red }}>
                    <span>{totalOnCrypto.returnPercentage}</span>
                    <span>%</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='Portefolio_Evolution'>
        <div className="Header">
          <span>{t('Evolution of the portfolio')}</span>
        </div>
        <div className='Body'>
          {isLoading || data === null ? (
            <div className='Loading'>
              <Loading_Balls count={6}/>
            </div>
          ) : data.length === 0 ? (
            <div className='No_Transition'>
              <span>{t("No transitions")}</span>
            </div>
          ) : (
            <Line_Chart_Portefolio_Evolution data={data} />
          )}
        </div>
      </div>
      
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
