import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BytebankChart } from '../chart';

const meta: Meta<typeof BytebankChart> = {
  title: 'Components/BytebankChart',
  component: BytebankChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BytebankChart>;

export const Default: Story = {
  args: {
    series: [35, 25, 20, 20],
    labels: [
      'Fundos de investimento',
      'Tesouro Direto',
      'Previdência Privada',
      'Bolsa de Valores',
    ],
  },
};
