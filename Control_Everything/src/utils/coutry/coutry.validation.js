import * as Api from '../../Imports/apis';
import axios from 'axios';

export const valideCoutry = async (country) => {

  try {
    const response = await axios.get(Api.Countries);
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

