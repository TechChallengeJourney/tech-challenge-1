import React from "react";
import { defaultTheme } from '@bytebank/shared';
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['*'],
      }
    },
    controls: { expanded: true },
  },
};
 
export default preview;

export const withTheme = (Story) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

