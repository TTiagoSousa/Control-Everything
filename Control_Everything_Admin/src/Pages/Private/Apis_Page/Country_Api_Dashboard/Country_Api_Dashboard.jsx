import React from 'react';
import './Country_Api_Dashboard.scss';
import useCompareCountryNames from '../../../../Hooks/Coutries/useCompareCountryNames';

const Country_Api_Dashboard = () => {

  const { mismatchWarning } = useCompareCountryNames();

  return (
    <div className='Country_Api_Dashboard'>
      {mismatchWarning.length > 0 && (
        <ul>
          {mismatchWarning.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default Country_Api_Dashboard;
