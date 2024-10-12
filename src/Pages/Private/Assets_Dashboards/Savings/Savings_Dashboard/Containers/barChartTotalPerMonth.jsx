import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import * as Color from '../../../../../../Styles/Colors';

const EChartsComponent = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  // Função para redimensionar o gráfico
  const resizeChart = () => {
    if (myChartRef.current) {
      myChartRef.current.resize();
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      // Inicializando o gráfico na ref
      myChartRef.current = echarts.init(chartRef.current);

      // Opções do gráficos
      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Dollars', 'Euros', 'Reais'],
          textStyle: {
            color: Color.gray,
            fontSize: 15,
          },
          orient: 'vertical',
          right: '2%', 
          top: 'middle',
          itemGap: 20 
        },
        grid: {
          left: '2%',
          right: '10%',  
          bottom: '3%',
          containLabel: true
        },
        dataset: {
          source: [
            ['month', 'Dollars', 'Euros', 'Reais'],
            ['January', 20, 15],
            ['February', 25, 10],
            ['March', 17, 13], 
            ['April', 0, 0],
            ['May', 15, 20, 100],
            ['June', 10, 25],
            ['July', 20, 15],
            ['August', 30, 10],
            ['September', 28, 14],
            ['October', 26, 16],
            ['November', 23, 19],
            ['December', 30, 20] 
          ]
        },
        xAxis: {
          type: 'category',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: true },
          axisLabel: {
            show: true,
            color: Color.gray,
            fontSize: 15
          }
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
        series: [
          { name: 'Dollars', type: 'bar' },
          { name: 'Euros', type: 'bar' },
          { name: 'Reais', type: 'bar' }
        ]
      };

      // Configurando as opções no gráfico
      myChartRef.current.setOption(options);

      // Adicionando ouvinte de redimensionamento
      window.addEventListener('resize', resizeChart);
    }

    // Removendo o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', resizeChart);
      myChartRef.current && myChartRef.current.dispose();
    };
  }, []);

  return <div className='SavingsPieChart' ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default EChartsComponent;
