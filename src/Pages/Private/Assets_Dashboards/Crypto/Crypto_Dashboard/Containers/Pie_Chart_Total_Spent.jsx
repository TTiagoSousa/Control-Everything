import React from 'react';
import * as echarts from 'echarts';
import '../Crypto_Dashboard.scss';
import { ThemeState } from '../../../../../../Contexts/Theme_Context';
import * as Color from '../../../../../../Styles/Colors';
import ReactECharts from "echarts-for-react";
import { useTranslation } from 'react-i18next';

const Pie_Chart_Total_Spent = ({ data }) => {

  const { t } = useTranslation();
  const { mode } = ThemeState();

  const labelColor = mode === 'dark' ? Color.gray : Color.gray_dark;

  // Map the data to extract the spentPercentage for each crypto and filter out entries with 0%
  const filteredData = data
    .map(crypto => ({
      name: crypto.cryptoSymbol,
      value: parseFloat(crypto.spentPercentage),
    }))
    .filter(item => item.value > 0);

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: ({ name, value }) => {
        return `${name}: ${value}%`;
      }
    },
    series: [
      {
        name: t('Spending Distribution'),
        width: 'auto',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: filteredData,
        animationType: 'scale',
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
        label: {
          show: true,
          color: labelColor,
          fontSize: 11, // Certifique-se de ajustar aqui
          fontWeight: 'bolder',
          formatter: ({ name, value }) => `${name}: ${value}%`
        },
        labelLine: {
          show: true, // Certifique-se de que está habilitado
          length: 10, // Ajuste o comprimento da linha, se necessário
          length2: 10,
          lineStyle: {
            width: 1,
            color: labelColor // Garanta que a cor da linha seja consistente com o rótulo
          }
        }
      }
    ]
  };

  return (
    <div className='Pie_Chart'>
      <ReactECharts
        option={options}
        opts={{ renderer: 'canvas' }}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Pie_Chart_Total_Spent;