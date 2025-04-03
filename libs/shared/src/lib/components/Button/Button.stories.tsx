import { Meta, StoryFn } from '@storybook/react';
import { BytebankButton, BytebankButtonProps } from './index';

export default {
  title: 'Components/Button', // O título aqui deve estar correto
  component: BytebankButton,
} as Meta;

// Alterando de Story para StoryFn
const Template: StoryFn<BytebankButtonProps> = (args) => (
  <BytebankButton {...args} />
);

export const Orange = Template.bind({});
Orange.args = {
  text: 'Botão Laranja',
  type: 'ORANGE',
  outlined: false,
};
