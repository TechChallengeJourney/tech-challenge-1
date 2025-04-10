'use client';
import { ThemeProvider } from '@mui/material/styles';
import {
  BytebankButton,
  BytebankIllustration,
  defaultTheme as theme,
} from '@bytebank/shared';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { BytebankInput } from '@bytebank/shared';
import { BytebankModal } from '@bytebank/shared';
import React from 'react';

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

  const [open, setOpen] = React.useState(false);

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

      <BytebankIllustration name="card-holding" variant="md" />
      <BytebankButton
        sendSubmit={() => setOpen(true)}
        label="Abrir Modal"
        color="primary"
        variant="outlined"
      />
      <BytebankModal
        illustrationSize="lg"
        title="Preencha os campos abaixo para criar sua conta corrente!"
        illustration="register"
        open={open}
        onClose={() => setOpen(false)}
      >
        <>
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
                <BytebankButton
                  label="Concluir transação"
                  color="primary"
                  variant="contained"
                />
              </Box>
            </form>
          </FormProvider>
        </>
      </BytebankModal>
    </ThemeProvider>
  );
}
