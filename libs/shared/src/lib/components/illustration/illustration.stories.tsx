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

          <Box>
            <Typography variant="h5" gutterBottom>
              Illustration Variants
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="nowrap" alignItems="flex-end" gap={5}>
              {['card-holding', 'card-saving', 'login', 'register', 'error'].map((name) => (
                <Box key={name} display="flex" alignItems="center" flexDirection="column">
                  <BytebankIllustration name={name} size="md" />
                  <Typography variant="caption" style={{ marginTop: '8px' }}>
                    {name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
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
      options: ['auto', 'sm', 'md', 'lg'],
    },
  },
} as Meta;

const createStory = ({ name = 'card-holding', size = 'md' }): Story<BytebankIllustrationProps> => {
  const Template: Story<BytebankIllustrationProps> = (args: BytebankIllustrationProps) => (
      <BytebankIllustration {...args} />
  );
  Template.args = {
      name,
      size
  };

  return Template;
};

const illustrationStories: { [key: string]: Story<BytebankIllustrationProps> } = {};
const templates = [ 'card-holding'];

templates.forEach((name) => {
  illustrationStories[`${name}`] = createStory({ name, size: 'md' });
});

export const cardHolding = illustrationStories[templates[0]];
