import React, { useState } from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import Input from './index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default {
  title: 'Components/InputField',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Input {...args} value={value} onChange={handleChange} />
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
