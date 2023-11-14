import React from 'react';
import {Link} from 'react-router-dom';
import '../../Apis_Dashboard.scss';
import useFetchCountryFromDataBase from '../../../../../../Hooks/Coutries/useFetchCoutryFromDataBase';
import useFetchCoutryFromApi from '../../../../../../Hooks/Coutries/useFetchCoutryFromApi';

const Country_Api_Card = () => {

  const {countriesDataBase, totalCountriesDataBase} = useFetchCountryFromDataBase();
  const {countriesApi, totalCountriesApi} = useFetchCoutryFromApi();

  console.log(totalCountriesApi);

  const renderCountryDataBase = () => {
    if (totalCountriesDataBase === 0) {
      return <span className='NoData'>API without data</span>;
    } else if (totalCountriesDataBase > 0) {
      return <span className='DataAvailable'>API with data</span>;
    }
  };

  const ApiUpdate = () => {
    if (totalCountriesDataBase !== totalCountriesApi) {
      return <span className='NoData'>Possible Update</span>;
    } else if (totalCountriesDataBase > 0) {
      return <></>;
    }
  };

  return (
    <div className='Api Country'>
      <div className='Title'>
        <span>Country List</span>
      </div>
        <div>
          {renderCountryDataBase()}
          {ApiUpdate()}
          <Link to="Country_Api_Dashboard">Api Dashboard</Link>
        </div>
    </div>
  )
};

export default Country_Api_Card;

