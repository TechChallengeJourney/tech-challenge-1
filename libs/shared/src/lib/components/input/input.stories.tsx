import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import BytebankInput from './index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as DocBlock from '@storybook/blocks';

export default {
  title: 'Components/BytebankInput',
  component: BytebankInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
  },
} as Meta<typeof BytebankInput>;

const Template: StoryFn<typeof BytebankInput> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <BytebankInput {...args} value={value} onChange={handleChange} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Nome',
  placeholder: 'Digite seu nome',
  type: 'text',
  error: false,
  helperText: '',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  placeholder: 'Digite seu email',
  type: 'email',
  error: true,
  helperText: 'Email inválido',
};
