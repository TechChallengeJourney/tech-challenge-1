import { Inter } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }

  interface TypographyVariantsOptions {
    xs?: TypographyVariantsOptions['h1'];
    sm?: TypographyVariantsOptions['h1'];
    md?: TypographyVariantsOptions['h1'];
    lg?: TypographyVariantsOptions['h1'];
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
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
    h1: { fontSize: 25, fontWeight: 700 },
    xs: { fontSize: 13, fontFamily: inter.style.fontFamily },
    sm: { fontSize: 16, fontFamily: inter.style.fontFamily },
    md: { fontSize: 28, fontFamily: inter.style.fontFamily },
    lg: { fontSize: 34, fontFamily: inter.style.fontFamily, fontWeight: 500 },
    button: { fontSize: 16 },
  },
  spacing: [0, 8, 16, 24, 32, 64],
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
