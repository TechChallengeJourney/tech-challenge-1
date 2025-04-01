import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonComponent, { ButtonComponentProps } from './index';

export default {
  title: 'Components/ButtonComponent', // O título aqui deve estar correto
  component: ButtonComponent,
} as Meta;

// Alterando de Story para StoryFn
const Template: StoryFn<ButtonComponentProps> = (args) => (
  <ButtonComponent {...args} />
);

export const Orange = Template.bind({});
Orange.args = {
  text: 'Botão Laranja',
  type: 'ORANGE',
  outlined: false,
};
