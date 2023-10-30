// Internal Imports
  import * as Api from '../../Imports/apis';
// Internal Imports

import axios from 'axios';

export const valideCoutry = async (country) => {

  try {
    const response = await axios.get('http://localhost:3000/coutries/all');
    const countriesData = response.data; 

    console.log('Dados da API:', countriesData); 

    const requestedCountry = countriesData.find(c => c.countryName === country);

    if (requestedCountry) {
     
      return true;
    } else {
      
      return false;
    }
  } catch (error) {

    return false;
  }

}

