import type { Meta, StoryObj } from '@storybook/react';
import { BytebankTransaction } from './index';
import { BytebankText } from '../text';
import { Box } from '@mui/material';

const meta: Meta<typeof BytebankTransaction> = {
  title: 'Components/BytebankTransaction',
  component: BytebankTransaction,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título exibido no topo do card' },
    children: { control: false, description: 'Conteúdo dentro do card' },
  },
};

export default meta;
type Story = StoryObj<typeof BytebankTransaction>;

export const Default: Story = {
  args: {
    title: 'Título do Card',
    children: (
      <Box mt={2}>
        <BytebankText fontSize="16px" color="gray">
          Aqui vai o conteúdo do card.
        </BytebankText>
      </Box>
    ),
  },
};
