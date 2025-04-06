'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BytebankButton } from '@bytebank/shared';
import { useForm, FormProvider } from 'react-hook-form';

import { BytebankInput } from '@bytebank/shared';

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

          <BytebankButton
            text="Concluir transação"
            type="GREEN"
            outlined={true}
          />
        </form>
      </FormProvider>
    </ThemeProvider>
  );
}
