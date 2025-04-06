'use client';
import { ThemeProvider } from '@mui/material/styles';
import { BytebankButton, defaultTheme } from '@bytebank/shared';
import { Typography } from '@mui/material';

export default function Index() {
  const handleSubmit = () => {
    alert('Clicou no botão');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
      <Typography variant="h4" color="primary">Eu sou um título</Typography>
        <BytebankButton
          label="Concluir transação"
          color="tertiary"
          variant="contained"
          sendSubmit={() => handleSubmit()}
        />
      </div>
    </ThemeProvider>
  );
}
