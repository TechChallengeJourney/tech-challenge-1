import '@testing-library/jest-dom';

jest.mock('../../libs/shared/src/lib/themes/default.theme', () => ({
  typography: {
      fontFamily: 'Mocked Font Family',
      h1: { fontSize: 25, fontWeight: 700 },
      xs: { fontSize: 13, fontFamily: 'Mocked Font Family' },
      sm: { fontSize: 16, fontFamily: 'Mocked Font Family' },
      md: { fontSize: 28, fontFamily: 'Mocked Font Family' },
      lg: { fontSize: 34, fontFamily: 'Mocked Font Family', fontWeight: 500 },
      button: { fontSize: 16 },
  },
  spacing: [0, 8, 16, 24, 32, 64],
  palette: {
      primary: {
          main: '#1976d2', 
          light: '#2196f3',
          dark: '#0d47a1',
      },
      secondary: {
          main: '#f50057',
          light: '#ff4081',
          dark: '#ab003c',
      },
  },
}));
