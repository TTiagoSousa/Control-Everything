import { useEffect, useState } from 'react';
import { GlobalState } from '../../Contexts/Global_Context';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';

const useFetchGetPortfolioEvolution = () => {
  
  const { authenticated, userId } = DataBaseState();
  const { selectCurrency } = GlobalState();

  const [time, setTime] = useState('1y'); // Estado para o período de tempo
  const [data, setData] = useState(null); // Estado para armazenar os dados retornados

  useEffect(() => {
    if (!authenticated) return;

    const fetchGetTotalOnCryptoConverted = async () => {
      try {
        const response = await http.get(
          `crypto-transitions/${userId}/get-evolution-of-portefolio?timePeriod=${time}`
        );

        setData(response.data); // Armazena os dados no estado `data`
      } catch (error) {
        console.error(error); // Apenas registra o erro no console
      }
    };

    fetchGetTotalOnCryptoConverted();
    
  }, [userId, authenticated, time]); // Inclui `time` nas dependências

  return { data, setTime, time };
};

export default useFetchGetPortfolioEvolution;