'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface BytebankChartProps {
  series: number[];
}

export function BytebankChart({ series }: BytebankChartProps) {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: [
      'Fundos de investimento',
      'Tesouro Direto',
      'Previdência Privada',
      'Bolsa de Valores',
    ],
    colors: ['#2567F9', '#8F3CFF', '#FF3C82', '#F1823D'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Chart options={options} series={series} type="pie" width="100%" />
    </div>
  );
}
