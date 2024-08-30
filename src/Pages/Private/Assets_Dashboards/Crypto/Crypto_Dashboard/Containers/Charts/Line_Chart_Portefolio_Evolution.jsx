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

    // Reverte a ordem dos dados
    const formattedData = Object.entries(data)
      .reverse()
      .map(([dateTime, value]) => ({
        dateTime,
        value
      }));

    return formattedData;
  };

  const formattedData = processData();

  // Atualiza as opções para refletir a nova ordem dos dados
  const options = {
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: formattedData.map(item => item.dateTime), // Reverte a ordem dos dados no eixo X
      nameLocation: 'middle',
      axisLabel: {
        color: labelColor
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
        color: labelColor 
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
        data: formattedData.map(item => item.value), // Reverte a ordem dos dados da série
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