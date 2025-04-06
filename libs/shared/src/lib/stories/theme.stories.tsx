import { Meta, Story } from '@storybook/react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { defaultTheme } from '../shared';
import * as DocBlock from '@storybook/blocks';

export default {
  title: 'Design Tokens/Text & Spacing',
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
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
  },
} as Meta;

const TextsTemplate: Story<{variant: string, label: string}> = ({variant = 'lg', label = 'Bytebank Dynamic Heading'}) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ margin: 2 }}> 
        <Typography variant={variant}>{label} ({variant})</Typography>
      </Box>
      <Box sx={{ margin: 2 }}> 
        <Typography variant="lg">Heading (lg)</Typography>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Typography variant="md">Heading (md)</Typography>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Typography variant="sm">Text (sm)</Typography>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Typography variant="xs">Text (xs)</Typography>
      </Box>
    </ThemeProvider>
  </>
);

const SpacingTemplate: Story = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Box paddingBottom={defaultTheme.spacing(1)}>
        <Box padding={defaultTheme.spacing(1)} sx={{ backgroundColor: defaultTheme.palette.grey[100] }}>
          <Typography variant="md">Espaçamento 8px</Typography>
        </Box>
      </Box>
      <Box paddingBottom={defaultTheme.spacing(2)}>
        <Box padding={defaultTheme.spacing(2)} sx={{ backgroundColor: defaultTheme.palette.grey[200] }}>
          <Typography variant="md">Espaçamento 16px</Typography>
        </Box>
      </Box>
      <Box paddingBottom={defaultTheme.spacing(3)}>
        <Box padding={defaultTheme.spacing(2)} sx={{ backgroundColor: defaultTheme.palette.grey[400] }}>
          <Typography variant="md">Espaçamento 24px</Typography>
        </Box>
      </Box>
      <Box paddingBottom={defaultTheme.spacing(4)}>
        <Box padding={defaultTheme.spacing(2)} sx={{ backgroundColor: defaultTheme.palette.grey[500] }}>
          <Typography variant="md">Espaçamento 32px</Typography>
        </Box>
      </Box>
      <Box paddingBottom={defaultTheme.spacing(5)}>
        <Box padding={defaultTheme.spacing(2)} sx={{ backgroundColor: defaultTheme.palette.grey[600] }}>
          <Typography variant="md">Espaçamento 64px</Typography>
        </Box>
      </Box>
      <Box padding={defaultTheme.spacing(2)} sx={{ height: '2rem', backgroundColor: defaultTheme.palette.grey[700] }}>
      </Box>
    </ThemeProvider>
  </>
);

export const Texts = TextsTemplate.bind({});
Texts.storyName = 'Texts';

export const Spacing = SpacingTemplate.bind({});
Spacing.storyName = 'Spacing';