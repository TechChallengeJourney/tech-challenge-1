'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BytebankButton } from '@bytebank/shared';
import { Typography } from '@mui/material';

export default function Index() {
  const handleSubmit = () => {
    alert('Clicou no botão');
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <BytebankButton
          text="Concluir transação"
          type="tertiary"
          variant="contained"
          sendSubmit={() => handleSubmit()}
        />

        <Typography variant="h2" color="tertiary">Eu sou um titulo</Typography>
      </div>
    </ThemeProvider>
  );
}
