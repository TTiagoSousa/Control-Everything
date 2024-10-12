import React from 'react';
import './Savings_Dashboard.scss';
import { useTranslation } from 'react-i18next';
import EChartsComponent from './Containers/barChartTotalPerMonth';

const Savings_Dashboard = () => {

  const { t } = useTranslation();

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
            <EChartsComponent />
          </div>
        </div>
      </div>
    
    </div>
  )
};

export default Savings_Dashboard;