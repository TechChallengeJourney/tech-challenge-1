import React from "react";
import theme from "../apps/bytebank/src/app/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import * as DocBlock from  "@storybook/blocks";
import { Title } from "@storybook/blocks";
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
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
};
 
export default preview;

export const withTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

