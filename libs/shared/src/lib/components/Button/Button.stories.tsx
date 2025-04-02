import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button', // O título aqui deve estar correto
  component: Button,
} as Meta;

// Alterando de Story para StoryFn
const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args} />
);

export const Orange = Template.bind({});
Orange.args = {
  text: 'Botão Laranja',
  type: 'ORANGE',
  outlined: false,
};
