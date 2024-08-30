import { useEffect, useState } from 'react';
import { GlobalState } from '../../Contexts/Global_Context';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';

const useFetchGetTotalOnCryptoConverted = () => {

  const { authenticated, userId } = DataBaseState();
  const { selectCurrency } = GlobalState();

  const [ totalOnCrypto, setTotalOnCrypto ] = useState(null)

  useEffect(() => {
    if (!authenticated) return;

    const fetchGetTotalOnCryptoConverted = async () => {
      try {

        const response = await http.get(`crypto-transitions/${userId}/get-total-converted/${selectCurrency}`);

        setTotalOnCrypto(response.data)

      } catch (error) {
        console.error(error);
      }
    };

    fetchGetTotalOnCryptoConverted();
    
  }, [userId, authenticated, selectCurrency]); 

  return { totalOnCrypto };
}

export default useFetchGetTotalOnCryptoConverted; 