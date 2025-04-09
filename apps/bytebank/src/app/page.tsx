'use client';
import { ThemeProvider } from '@mui/material/styles';
import { BytebankButton, BytebankIllustration, defaultTheme as theme } from '@bytebank/shared';
import { useForm, FormProvider } from 'react-hook-form';
import { Box } from '@mui/material';

import { BytebankInput, BytebankText } from '@bytebank/shared';

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
              <BytebankText type="lg" color="primary" label='Eu sou um título' />               
            </Box>
            <BytebankButton
              label="Concluir transação"
              color="primary"
              variant="contained"
            />
          </Box>
        </form>
      </FormProvider>


      <BytebankIllustration name="card-holding" variant="md" />
    </ThemeProvider>
  );
}
