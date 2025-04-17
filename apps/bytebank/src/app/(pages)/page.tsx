'use client';
import {
  BytebankButton,
  BytebankCardBank,
  BytebankModal,
  BytebankSelectController,
  BytebankInputController,
  BytebankExtract
} from '@bytebank/shared';
import { useForm, FormProvider } from 'react-hook-form';
import { Box } from '@mui/material';
import React from 'react';

type FormValues = {
  name: string;
  email: string;
  tipo: string;
};

interface BytebankExtractProps {
  month: string;
  data: BytebankExtractPropsData[];
}

interface BytebankExtractPropsData {
  date: Date;
  type: 'Depósito' | 'Saque' | 'Transferência';
  value: number;
}

const extract: BytebankExtractProps[] = [
  {
    month: 'Abril',
    data: [
      {
        date: new Date(),
        type: 'Depósito',
        value: 1.25,
      },
      {
        date: new Date(),
        type: 'Saque',
        value: -30,
      },
      {
        date: new Date(),
        type: 'Transferência',
        value: 40,
      },
    ],
  },
];

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

  const [open, setOpen] = React.useState(false);
  const selectOptions = [
    { label: 'Pessoa Física', value: 'pf' },
    { label: 'Pessoa Jurídica', value: 'pj' },
  ];

  return (
    <>
      <Box width="100%" p={2} display="flex" flexDirection="column" gap={4}>
        <BytebankCardBank
          variant="physical"
          details={cardDetails}
        ></BytebankCardBank>
        <BytebankCardBank
          variant="virtual"
          details={cardDetails}
        ></BytebankCardBank>
        <BytebankButton
          sendSubmit={() => setOpen(true)}
          label="Abrir Modal"
          color="primary"
          variant="outlined"
        />
      </Box>
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
      <BytebankExtract extract={extract} />
    </>
  );
}
