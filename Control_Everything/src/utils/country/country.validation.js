// Internal Imports
  import * as Api from '../../Imports/apis';
// Internal Imports

import axios from 'axios';

export const valideCountry = async (country) => {

  try {
    const response = await axios.get('http://192.168.1.18:3000/countries/all');
   
    const countriesData = response.data; 
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

