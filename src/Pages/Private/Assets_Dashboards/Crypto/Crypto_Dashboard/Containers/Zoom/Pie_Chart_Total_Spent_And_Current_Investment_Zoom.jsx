import React, { useState } from 'react';
import Dark_Div from '../../../../../../../Components/Dark_Div/Dark_Div';
import Pie_Chart_Investment_Percentage from '../Charts/Pie_Chart_Investment_Percentage';
import Pie_Chart_Total_Spent from '../Charts/Pie_Chart_Total_Spent';
import { useTranslation } from 'react-i18next';
import Loading_Balls from '../../../../../../../Components/Loading/Loading_Balls/Loading_Balls';

function Pie_Chart_Total_Spent_And_Current_Investment_Zoom({ pieChartsZoom, setPieChartsZoom, totalSpentAndCurrentInvestment, isLoading }) {

  const { t } = useTranslation();

  const [showTotalSpent, setShowTotalSpent] = useState(true);
  const [showCurrentInvestment, setShowCurrentInvestment] = useState(true);

  const toggleTotalSpent = () => {
    setShowTotalSpent(prevState => !prevState);
  };

  const toggleCurrentInvestment = () => {
    setShowCurrentInvestment(prevState => !prevState);
  };

  return (
    <>
      <Dark_Div
        toggled={setPieChartsZoom}
        toggle={pieChartsZoom}
      /> 

      <div className={`Pie_Chart_Total_Spent_And_Current_Investment_Zoom ${pieChartsZoom ? 'active' : ''}`}>
        <div className='Header'>
          <div className='Chart_Buttons'>
            <button onClick={toggleTotalSpent}>
              <span className={showTotalSpent ? 'active' : 'inactive'}>{t('Total spent')}</span>
            </button>
            <button onClick={toggleCurrentInvestment} >
              <span className={showCurrentInvestment ? 'active' : 'inactive'}>{t('Current investment')}</span>
            </button>
          </div>
        </div>
        <div className='Body'>
          {showTotalSpent && (
            <div className='Chart'>
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
          )}
          {showCurrentInvestment && (
            <div className='Chart'>
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
          )}
        </div>
      </div>
    </>
  )
};

export default Pie_Chart_Total_Spent_And_Current_Investment_Zoom;