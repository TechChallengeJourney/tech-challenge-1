import { Meta, Story } from '@storybook/react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import * as DocBlock from '@storybook/blocks';
import { BytebankIllustration, BytebankIllustrationProps } from '.';

export default {
  title: 'Design Tokens/Illustrations',
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
  argTypes: {
    name: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
  },
} as Meta;

const createStory = ({ name = 'card-holding', size = 'md' }): Story<BytebankIllustrationProps> => {
  const Template: Story<BytebankIllustrationProps> = (args) => (
      <BytebankIllustration {...args} />
  );

  // Set default args for the story
  Template.args = {
      name,
      size
  };

  return Template;
};

const illustrationStories: { [key: string]: Story<BytebankIllustrationProps> } = {};
const templates = [ 'card-holding', 'card-saving', 'error'];

templates.forEach((name) => {
  illustrationStories[`${name}`] = createStory({ name, size: 'md' });
});

export const cardHolding = illustrationStories[templates[0]];
export const cardSaving = illustrationStories[templates[1]];
export const pageError = illustrationStories[templates[2]];
