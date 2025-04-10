'use client';
import { ThemeProvider } from '@mui/material/styles';
import {
  BytebankButton,
  BytebankCardBank,
  BytebankInput,
  defaultTheme as theme,
} from '@bytebank/shared';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

type FormValues = {
  name: string;
  email: string;
};

export default function Index() {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const cardDetails = {
    name: 'Joana da Silva',
    cardNumber: '12234565665773',
    expirationDate: '12/2029',
  };
  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <BytebankInput
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
          />
          <BytebankInput
            name="email"
            label="Email"
            placeholder="Digite seu email"
            type="email"
          />

          <Box>
            <Box marginBottom={theme.spacing(4)}>
              <Typography variant="lg" color="primary">
                Eu sou um título
              </Typography>
            </Box>
            <BytebankButton
              label="Concluir transação"
              color="primary"
              variant="contained"
            />
          </Box>
        </form>
      </FormProvider>
      <br />
      <BytebankCardBank
        variant="physical"
        details={cardDetails}
      ></BytebankCardBank>{' '}
      <br />
      <BytebankCardBank
        variant="virtual"
        details={cardDetails}
      ></BytebankCardBank>
    </ThemeProvider>
  );
}
