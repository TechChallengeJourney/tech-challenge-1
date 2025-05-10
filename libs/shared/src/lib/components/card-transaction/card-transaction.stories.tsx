import { Meta, StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import { BytebankTransaction } from '.';
import { UserProvider } from '../../contexts/user.context';

export default {
  title: 'Components/BytebankTransaction',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Primary />
          <DocBlock.Controls />
        </>
      ),
    },
  },
} as Meta;

const Template = () => (
  <UserProvider>
    <BytebankTransaction />
  </UserProvider>
);

export const Default: StoryObj = {
  render: Template,
};
