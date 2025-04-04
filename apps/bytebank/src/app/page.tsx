'use client';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import { BytebankButton } from '@bytebank/shared';

export default function Index() {
  const handleSubmit = () => {
    alert('Clicou no botão');
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <BytebankButton
          text="Concluir transação"
          type="GREEN"
          outlined={true}
          sendSubmit={() => handleSubmit()}
        />
      </div>
    </ThemeProvider>
  );
}
