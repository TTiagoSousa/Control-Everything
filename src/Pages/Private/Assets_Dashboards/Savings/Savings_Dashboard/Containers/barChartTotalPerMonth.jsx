import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import * as Color from '../../../../../../Styles/Colors';

const BarChartTotalPerMonth = ({ chartData, currencies }) => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  const resizeChart = () => {
    if (myChartRef.current) {
      myChartRef.current.resize();
    }
  };

  useEffect(() => {
    if (chartRef.current && chartData && currencies.length > 0) {
      myChartRef.current = echarts.init(chartRef.current);

      // Criar as séries com base nas moedas com transações
      const series = currencies.map(currencyCode => ({
        name: currencyCode,
        type: 'bar',
      }));

      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          confine: true,
        },
        legend: {
          data: currencies,
          textStyle: {
            color: Color.gray,
            fontSize: 15,
          },
        },
        grid: {
          left: '2%',
          right: '3%',  
          bottom: '3%',
          containLabel: true
        },
        dataset: {
          source: chartData,
        },
        xAxis: {
          type: 'category',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            show: true,
            color: Color.gray,
            fontSize: 15,
            lineHeight: 20, // Ajuste o espaçamento entre linhas se necessário
            formatter: function (value) {
              return value;
            },
          },
        },
        yAxis: {
          show: true,
          splitLine: {
            show: true,
            lineStyle: {
              color: Color.gray,
              type: 'dashed',
              opacity: 0.2
            }
          },
          axisLabel: {
            show: true,
            color: Color.gray,
            fontSize: 15
          }
        },
        series: series
      };

      myChartRef.current.setOption(options);

      window.addEventListener('resize', resizeChart);
    }

    return () => {
      window.removeEventListener('resize', resizeChart);
      myChartRef.current && myChartRef.current.dispose();
    };
  }, [chartData, currencies]);

  return (
    <div
      className='SavingsPieChart'
      ref={chartRef}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default BarChartTotalPerMonth;