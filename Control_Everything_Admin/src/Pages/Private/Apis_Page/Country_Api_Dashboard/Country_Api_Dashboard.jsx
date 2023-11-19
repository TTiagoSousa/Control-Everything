import React from 'react';
import './Country_Api_Dashboard.scss';
import useCompareCountryNames from '../../../../Hooks/Coutries/useCompareCountryNames';
import useFetchUpdateCoutries from '../../../../Hooks/Coutries/useFetchUpdateCoutries';

const Country_Api_Dashboard = () => {

  const { mismatchWarning } = useCompareCountryNames();
  const {UpdadeCountriesApi, loading} = useFetchUpdateCoutries()

  console.log("Loading" + loading)

  return (
    <div className='Country_Api_Dashboard'>
      {mismatchWarning.length > 0 && (
        <ul>
          {mismatchWarning.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <button onClick={UpdadeCountriesApi}>Update</button>
    </div>
  )
};

export default Country_Api_Dashboard;
