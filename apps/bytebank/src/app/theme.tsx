import { Inter } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
});

const theme = createTheme({
  typography: {
    fontFamily: `${inter.style.fontFamily}, Arial`,
  },
});

export default responsiveFontSizes(theme);
