import { Meta, StoryObj } from '@storybook/react';
import { BytebankButton } from './index';

const meta: Meta<typeof BytebankButton> = {
  title: 'Components/Button', // O título aqui deve estar correto
  component: BytebankButton,
};
export default meta;

type Story = StoryObj<typeof BytebankButton>;

export const Primary: Story = {
  args: {
    text: 'Botão primário',
    type: 'primary',
    variant: 'contained',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Botão secundário',
    type: 'secondary',
    variant: 'contained',
  },
};
