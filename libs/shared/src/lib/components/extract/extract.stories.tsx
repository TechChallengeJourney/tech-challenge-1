import React, { useState, useEffect } from 'react';
import { BytebankExtract, BytebankExtractProps } from './index';

export default {
  title: 'Components/BytebankExtract',
  component: BytebankExtract,
};

const mockData: BytebankExtractProps[] = [
  {
    month: 'setembro',
    data: [
      {
        date: new Date('2023-09-30T21:00:00.000Z'),
        type: 'Depósito',
        value: 1000,
      },
      {
        date: new Date('2023-09-10T12:00:00.000Z'),
        type: 'Transferência',
        value: -200,
      },
    ],
  },
  {
    month: 'outubro',
    data: [
      {
        date: new Date('2023-10-15T18:00:00.000Z'),
        type: 'Saque',
        value: -300,
      },
    ],
  },
];

const Template = () => {
  const [extract, setExtract] = useState<BytebankExtractProps[]>([]);

  // Simula o efeito de carregamento dos dados
  useEffect(() => {
    setExtract(mockData); // Aqui é onde você passa os dados diretamente para o componente
  }, []);

  return <BytebankExtract />;
};

export const Default = Template.bind({});
