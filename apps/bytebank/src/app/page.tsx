'use client';
import { ThemeProvider } from '@mui/material/styles';
import { BytebankButton, defaultTheme as theme } from '@bytebank/shared';
import { Box, Typography } from '@mui/material';

export default function Index() {
  const handleSubmit = () => {
    alert('Clicou no botão');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box marginBottom={theme.spacing(4)}>
          <Typography variant="lg" color="primary">Eu sou um título</Typography>
        </Box>
        <BytebankButton
          label="Concluir transação"
          color="primary"
          variant="contained"
          sendSubmit={() => handleSubmit()}
        />
      </Box>
    </ThemeProvider>
  );
}
