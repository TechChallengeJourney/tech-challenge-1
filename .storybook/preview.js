import theme from "../apps/bytebank/src/app/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const withTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
