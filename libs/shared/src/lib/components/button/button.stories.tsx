import { Meta, StoryObj } from '@storybook/react';
import  * as DocBlock from '@storybook/blocks';
import { BytebankButton } from './index';

const meta = {
  title: 'Components/Button', // O título aqui deve estar correto
  component: BytebankButton,
  tags: ['autodocs'],
  parameters: {
         docs: {
        page: () =>
          <>
          <DocBlock.Title />
          <DocBlock.Description />
          
          <DocBlock.Primary />
          <DocBlock.Controls />

          <DocBlock.Title>Variações</DocBlock.Title>
          <DocBlock.Stories />
          </>
      }
    }
} satisfies Meta<typeof BytebankButton>;

export default meta;

type Story = StoryObj<typeof BytebankButton>;

export const Primary: Story = {
  args: {
    text: 'Label',
    type: 'primary',
    variant: 'contained',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Label',
    type: 'secondary',
    variant: 'contained',
  },
};


export const Tertiary: Story = {
  args: {
    text: 'Label',
    type: 'tertiary',
    variant: 'contained',
  },
};