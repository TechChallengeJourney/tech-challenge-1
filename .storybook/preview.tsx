import React from "react";
import { defaultTheme } from '@bytebank/shared';
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      logo: './apps/bytebank/public/logo.png',
      sidebar: {
        showRoots: false,
        // Customize your colors here (you can adjust these values)
        backgroundColor: '#333333', // Background color of the sidebar
        textColor: '#FFFFFF', // Text color in the sidebar
      },
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

