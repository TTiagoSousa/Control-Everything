import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import { GlobalState } from '../../Contexts/Global_Context';
import http from '../../Services/httpService';

const useFetchGetTotalHeritageConverted = () => {
 
  const [ totalHeritage, setTotalHeritage ] = useState(null)

  const { authenticated, userId } = DataBaseState();
  const { selectCurrency } = GlobalState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchGetTotalHeritageConverted = async () => {
      try {

        const response = await http.get(`heritage/${userId}/get-total-converted/${selectCurrency}`);

        setTotalHeritage(response.data)

      } catch (error) {
        console.error(error);
      }
    };

    fetchGetTotalHeritageConverted();
  }, [userId, authenticated, selectCurrency]); 

  return { totalHeritage };
}

export default useFetchGetTotalHeritageConverted;