import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartWrapperStyle } from './Chart.css';

const Chart = () => {
  const chartState = {
    series: [
      {
        name: 'SUN',
        data: new Array(52).fill(25),
      },
      {
        name: ' ',
        data: new Array(52).fill(25),
      },
      {
        name: 'FRI',
        data: new Array(52).fill(25),
      },
      {
        name: ' ',
        data: new Array(52).fill(25),
      },
      {
        name: 'WED',
        data: new Array(52).fill(25),
      },
      {
        name: ' ',
        data: new Array(52).fill(25),
      },
      {
        name: 'MON',
        data: new Array(52).fill(25),
      },
    ],
    options: {
      chart: {
        type: 'heatmap' as any,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#008FFB'],
      title: {
        text: 'HeatMap Chart (Single color)',
      },
    },
  };
  return (
    <div className={ChartWrapperStyle}>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="heatmap"
        width={1200}
        height={250}
      />
    </div>
  );
};

export default Chart;
