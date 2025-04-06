import { Inter } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
});

let defaultTheme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  }
});

defaultTheme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#004D61',
      light: '#DEE9EA',
      dark: '#002B3D',
    },
    secondary: {
      main: '#FF5031',
      light: '#ffbaad',
      dark: '#C43C28',
    },
    tertiary: defaultTheme.palette.augmentColor({
      color: {
        main: '#DEE9EA',
        light: '#F8F8F8',
        dark: '#004D61',
        contrastText: '#004D61',
      },
      name: 'tertiary',
    }),
  },
  cssVariables: true,
});

defaultTheme = responsiveFontSizes(defaultTheme);
export default defaultTheme;
