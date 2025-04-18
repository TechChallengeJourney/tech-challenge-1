import { Meta, StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import { BytebankText, BytebankTextProps } from './index';

const SIMPLE_TEXT = 'The quick brown fox jumps over the lazy dog';

const meta = {
  title: 'Components/Text',
  component: BytebankText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Title>Variações</DocBlock.Title>
          <DocBlock.Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof BytebankText>;

export default meta;

type Story = StoryObj<BytebankTextProps>;

export const Primary: Story = {
  args: {
    children: SIMPLE_TEXT,
    color: 'primary',
    variant: 'sm',
  },
};

export const Secondary: Story = {
  args: {
    children: SIMPLE_TEXT,
    color: 'secondary',
    variant: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    children: SIMPLE_TEXT,
    color: 'tertiary',
    variant: 'lg',
  },
};

export const Success: Story = {
  args: {
    children: SIMPLE_TEXT,
    color: 'success',
    variant: 'sm',
  },
};

export const Warning: Story = {
  args: {
    children: SIMPLE_TEXT,
    color: 'warning',
    variant: 'sm',
  },
};

export const Error: Story = {
  args: {
    children: SIMPLE_TEXT,
    color: 'error',
    variant: 'sm',
  },
};
