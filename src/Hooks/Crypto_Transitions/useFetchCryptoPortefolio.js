import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import { GlobalState } from '../../Contexts/Global_Context';
import http from '../../Services/httpService';

const useFetchCryptoPortefolio = () => {
 
  const [ cryptoList, serCryptoList ] = useState(null)

  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchCryptoPortefolio = async () => {
      try {

        const response = await http.get(`crypto-transitions/${userId}/get-crypto-portefolio`);

        serCryptoList(response.data.cryptoTable)

      } catch (error) {
        console.error(error);
      }
    };

    fetchCryptoPortefolio();
  }, [userId, authenticated]); 

  return { cryptoList };
}

export default useFetchCryptoPortefolio;