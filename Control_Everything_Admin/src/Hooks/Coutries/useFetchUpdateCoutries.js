import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';

const useFetchUpdateCoutries = () => {

  const [loading, setLoading] = useState(false);

  const UpdadeCountriesApi = async () =>{
    
    try {

      setLoading(true);

      const response = await axios.post(`${BASE_URL}/countries/fetch-data`);
    
      setLoading(true);

    } catch (error) {
      console.log(error);
    }

  }

  return {UpdadeCountriesApi, loading};
}


export default useFetchUpdateCoutries;