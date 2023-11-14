import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';

const useFetchCoutryFromApi = () => {

  const [countriesApi, setCountriesApi] = useState([]);
  const [totalCountriesApi, setTotalCountriesApi] = useState(0);

  useEffect(() => {
    const fetchCountryApi = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3/all');

        setCountriesApi(response);
        setTotalCountriesApi(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryApi();
  }, []);

  return {countriesApi, totalCountriesApi};
}


export default useFetchCoutryFromApi;