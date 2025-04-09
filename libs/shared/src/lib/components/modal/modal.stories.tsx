import { Meta, Story } from '@storybook/react';
import { BytebankModal } from './index';
import * as DocBlock from '@storybook/blocks';
import { BytebankButton } from '../button';
import React from 'react';

const meta: Meta<typeof BytebankModal> = {
  title: 'Components/Modal',
  component: BytebankModal,
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
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
};

export default meta;

const ModalTemplate: Story = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <BytebankModal open={open} onClose={() => setOpen(false)}>
        <>
          <h1>teste</h1>
        </>
      </BytebankModal>
      <BytebankButton
        label="Abre modal"
        variant="contained"
        color="primary"
        sendSubmit={() => setOpen(true)}
      />
    </>
  );
};

export const Modal = ModalTemplate.bind({});
