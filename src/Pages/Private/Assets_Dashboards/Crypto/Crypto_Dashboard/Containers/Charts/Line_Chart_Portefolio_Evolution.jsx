import React from 'react';
import * as echarts from 'echarts';
import '../../Crypto_Dashboard.scss';
import { ThemeState } from '../../../../../../../Contexts/Theme_Context';
import * as Color from '../../../../../../../Styles/Colors';
import ReactECharts from "echarts-for-react";
import { useTranslation } from 'react-i18next';

const Line_Chart_Portefolio_Evolution = ({ data }) => {

  const { mode } = ThemeState();
  const labelColor = mode === 'dark' ? Color.gray : Color.gray_dark;

  const processData = () => {
    if (!data) return [];

    // Reverte a ordem dos dados e formata as datas com hora e minutos
    const formattedData = Object.entries(data)
      .reverse()
      .map(([dateTime, value]) => {
        const formattedDateTime = new Date(dateTime).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
        return {
          dateTime: formattedDateTime,
          value,
        };
      });

    return formattedData;
  };

  const formattedData = processData();

  // Atualiza as opções para refletir a nova ordem dos dados
  const options = {
    tooltip: {
      trigger: 'axis',
      formatter: params => {
        const date = params[0].axisValue;
        const value = params[0].data;
        return `${date}<br/>$${value.toFixed(2)}`; // Formata com símbolo do dólar
      }
    },
    xAxis: {
      type: 'category',
      data: formattedData.map(item => item.dateTime),
      nameLocation: 'middle',
      axisLabel: {
        color: labelColor,
      },
      axisLine: {
        lineStyle: {
          color: labelColor
        }
      },
      axisTick: {
        lineStyle: {
          color: labelColor
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: labelColor,
        formatter: value => `$${value.toFixed(2)}` // Formata com símbolo do dólar no eixo Y
      },
      axisLine: {
        lineStyle: {
          color: labelColor
        }
      },
      axisTick: {
        lineStyle: {
          color: labelColor
        }
      }
    },
    series: [
      {
        type: 'line',
        data: formattedData.map(item => item.value),
        lineStyle: {
          color: Color.orange
        },
        showSymbol: false,
        emphasis: { focus: 'series' },
        smooth: true,
      },
    ],
  };

  return (
    <div className='Line_Chart'>
      <ReactECharts
        option={options}
        opts={{ renderer: 'canvas' }}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Line_Chart_Portefolio_Evolution;