import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BytebankExtract, BytebankExtractProps } from './index';
import { Box } from '@mui/material';

// Definição do metadata do Storybook
export default {
  title: 'Components/BytebankExtract',
  component: BytebankExtract,
  argTypes: {
    extract: {
      control: 'object',
    },
  },
} as Meta<typeof BytebankExtract>;

// Dados de exemplo para o componente
const sampleData: BytebankExtractProps[] = [
  {
    month: 'Janeiro',
    data: [
      {
        date: new Date(2025, 0, 1),
        type: 'Depósito',
        value: 1500.75,
      },
      {
        date: new Date(2025, 0, 5),
        type: 'Saque',
        value: -500.25,
      },
      {
        date: new Date(2025, 0, 10),
        type: 'Transferência',
        value: 1000.0,
      },
    ],
  },
  {
    month: 'Fevereiro',
    data: [
      {
        date: new Date(2025, 1, 3),
        type: 'Depósito',
        value: 2000.0,
      },
      {
        date: new Date(2025, 1, 7),
        type: 'Saque',
        value: -200.5,
      },
    ],
  },
];

// Template da história
const Template = (args: { extract: BytebankExtractProps[] }) => (
  <Box sx={{ padding: '20px' }}>
    <BytebankExtract {...args} />
  </Box>
);

// Exemplo de história
export const Default: StoryObj<typeof BytebankExtract> = {
  render: Template,
  args: {
    extract: sampleData,
  },
};
