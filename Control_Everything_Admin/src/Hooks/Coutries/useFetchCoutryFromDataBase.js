import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/urls';
import axios from 'axios';

const useFetchCountryFromDataBase = () => {

  const [countriesDataBase, setCountriesDataBase] = useState([]);
  const [totalCountriesDataBase, setTotalCountriesDataBase] = useState(0);

  useEffect(() => {
    const fetchCountryApi = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/countries/all`);

        setCountriesDataBase(response.data);
        setTotalCountriesDataBase(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryApi();
  }, []);

  return {countriesDataBase, totalCountriesDataBase};
}


export default useFetchCountryFromDataBase;


// import { useEffect, useState } from 'react';
// import { BASE_URL } from '../../config/urls';
// import axios from 'axios';

// const useFetchCountryFromDataBase = () => {

//   const [countriesDataBase, setCountriesDataBase] = useState([]);
//   const [totalCountriesDataBase, setTotalCountriesDataBase] = useState(0);

//   useEffect(() => {
//     const fetchCountryApi = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/countries/all`);

//         setTotalCountries(response.length);
//         setCountriesDataBase(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCountryApi();
//   }, []);

//   return countriesDataBase;
// }


// export default useFetchCountryFromDataBase;