import { Box } from '@mui/material';
import {
  BytebankText,
  BytebankInputController,
  BytebankButton,
  BytebankSelectController,
  BytebankCard,
  useUser,
  palette,
  Transaction,
  BytebankSnackbar,
  SnackbarData,
} from '@bytebank/shared';
import './style.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';

type Props = {
  onSuccess?: () => void;
};

export function BytebankCardTransaction({ onSuccess }: Props) {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarData, setSnackbarData] = useState<SnackbarData | null>(null);
  const registerMethods = useForm<Partial<Transaction>>({
    defaultValues: {
      type: '',
      value: '',
    },
  });

  const { user } = useUser();

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarData(null);
  };

  const handleTransaction = async (data: Partial<Transaction>) => {
    const response = await fetch('/api/extract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user?.id, ...data, date: new Date() }),
    });
    if (response.ok) {
      registerMethods.setValue('type', '');
      registerMethods.setValue('value', '');
      setSnackbarData({
        status: 'success',
        message: 'Transação adicionada com sucesso!!',
      });
      setSnackbarOpen(true);
      onSuccess?.();
    } else {
      setSnackbarData({
        status: 'error',
        message: 'Algo deu errado. Por favor, aguarde e tente novamente!!',
      });
      setSnackbarOpen(true);
    }
  };

  const selectOptions = [
    { label: 'Câmbio de Moeda', value: 'Câmbio de Moeda' },
    { label: 'DOC/TED', value: 'DOC/TED' },
    { label: 'Empréstimo e Financeiro', value: 'Empréstimo e Financeiro' },
  ];

  return (
    <>
      <BytebankCard
        className="bytebank-card-content"
        bgcolor={palette['grey.300']}
      >
        <Box textAlign="left" p={4}>
          <Box pb={4}>
            <BytebankText fontWeight={'bold'} variant="md" color="black">
              Nova transação
            </BytebankText>
          </Box>
          <FormProvider {...registerMethods}>
            <form onSubmit={registerMethods.handleSubmit(handleTransaction)}>
              <BytebankSelectController
                name="type"
                label="Selecione o tipo de transação"
                options={selectOptions}
              />
              <BytebankInputController
                name="value"
                label="Valor"
                type="text"
                mask="currency"
              />
              <Box display={'flex'} pt={2} justifyContent={'center'}>
                <BytebankButton
                  label={'Concluir transação'}
                  color={'secondary'}
                  variant={'contained'}
                  fullWidth
                />
              </Box>
            </form>
          </FormProvider>
        </Box>
      </BytebankCard>
      <BytebankSnackbar
        open={isSnackbarOpen}
        data={snackbarData}
        onClose={closeSnackbar}
      />
    </>
  );
}
