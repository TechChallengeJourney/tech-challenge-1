'use client';
import { ThemeProvider } from '@mui/material/styles';
import {
  BytebankButton,
  BytebankCardBank,
  BytebankText,
  BytebankInputController,
  BytebankSelectController,
  defaultTheme as theme,
} from '@bytebank/shared';
import { useForm, FormProvider } from 'react-hook-form';
import { Box } from '@mui/material';


type FormValues = {
  name: string;
  email: string;
  tipo: string;
};

export default function Index() {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      tipo: '',
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

  const selectOptions = [
    { label: 'Pessoa Física', value: 'pf' },
    { label: 'Pessoa Jurídica', value: 'pj' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <BytebankInputController
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
          />
          <BytebankInputController
            name="email"
            label="Email"
            placeholder="Digite seu email"
            type="email"
          />

          <BytebankSelectController
            name="tipo"
            label="Tipo de pessoa"
            options={selectOptions}
          />

          <Box>
            <Box marginBottom={theme.spacing(4)}>
              <BytebankText variant="lg" color="primary">Eu sou um título</BytebankText>      
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
