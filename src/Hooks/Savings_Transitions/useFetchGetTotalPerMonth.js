import { useState, useEffect, useTransition } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';
import { useTranslation } from 'react-i18next';

const useFetchGetTotalPerMonth = () => {

  const { t } = useTranslation();

  const [chartData, setChartData] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const { authenticated, userId } = DataBaseState();

  useEffect(() => {
    if (!authenticated) return;

    const fetchGetTotalPerMonth = async () => {
      try {
        const response = await http.get(`savings-transitions/${userId}/total-per-month-in-the-last-twelve-months`);
        const totalPerMonth = response.data;

        const monthsMap = [
          t('January'), t('February'), t('March'), t('April'), t('May'), t('June'),
          t('July'), t('August'), t('September'), t('October'), t('November'), t('December')
        ];

        const { last12Months } = totalPerMonth;

        // Obter lista de moedas que têm transações
        const currencySet = new Set();
        last12Months.forEach(item => {
          item.currencies.forEach(c => {
            if (c.totalAmount > 0) {
              currencySet.add(c.currency);
            }
          });
        });

        const currencyList = Array.from(currencySet);

        // Construir o cabeçalho do dataset
        const processedChartData = [['month', ...currencyList]];

        // Construir os dados para cada mês
        last12Months.forEach(item => {
          const monthName = `${monthsMap[item.month - 1]}\n${item.year}`;
          const monthData = [monthName];

          currencyList.forEach(currencyCode => {
            const currencyData = item.currencies.find(c => c.currency === currencyCode);
            monthData.push(currencyData ? currencyData.totalAmount : 0);
          });

          processedChartData.push(monthData);
        });

        setChartData(processedChartData);
        setCurrencies(currencyList);

      } catch (error) {
        console.error(error);
      }
    };

    fetchGetTotalPerMonth();
  }, [userId, authenticated]); 

  return { chartData, currencies };
};

export default useFetchGetTotalPerMonth;