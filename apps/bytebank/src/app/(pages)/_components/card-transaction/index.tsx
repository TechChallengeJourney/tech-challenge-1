import { Alert, AlertColor, Box, Snackbar } from '@mui/material';
import {
  BytebankText,
  BytebankInputController,
  BytebankButton,
  BytebankSelectController,
  BytebankCard,
  useUser,
  palette,
} from '@bytebank/shared';
import './style.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';

export interface IForm {
  type: string;
  value: string;
}

export function BytebankTransaction() {
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarData, setSnackbarData] = useState<{
    severity: AlertColor;
    message: string;
  } | null>(null);
  const registerMethods = useForm<IForm>({
    defaultValues: {
      type: '',
      value: '',
    },
  });

  const { user } = useUser();

  const isValidFields = () => {
    if (registerMethods.getValues('type').trim() === '') return false;
    if (registerMethods.getValues('value').trim() === '') return false;

    return true;
  };

  const handleTransaction = async (data: IForm) => {
    if (isValidFields()) {
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
          severity: 'success',
          message: 'Transação adicionada com sucesso!!',
        });
        setSnackbarOpen(true);
      } else {
        setSnackbarData({
          severity: 'error',
          message: 'Algo deu errado. Por favor, aguarde e tente novamente!!',
        });
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarOpen(true);
      setSnackbarData({
        severity: 'error',
        message: 'Preencha todos os campos!!',
      });
    }
  };

  const selectOptions = [
    { label: 'Câmbio de Moeda', value: 'Câmbio de Moeda' },
    { label: 'DOC/TED', value: 'DOC/TED' },
    { label: 'Empréstimo e Financeiro', value: 'Empréstimo e Financeiro' },
  ];

  const renderSnackBar = () => {
    return snackbarData ? (
      <>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={snackbarData.severity}
          >
            {snackbarData.message}
          </Alert>
        </Snackbar>
      </>
    ) : null;
  };

  return (
    <BytebankCard
      className="bytebank-card-content"
      bgcolor={palette['grey.300']}
    >
      <Box width="40vw" textAlign="left" p={4}>
        <Box pb={4}>
          <BytebankText variant="lg" color="black">
            Nova transação
          </BytebankText>
        </Box>
        {renderSnackBar()}
        <FormProvider {...registerMethods}>
          <form onSubmit={registerMethods.handleSubmit(handleTransaction)}>
            <BytebankSelectController
              name="type"
              label="Selecione o tipo de transação"
              options={selectOptions}
            />
            <BytebankInputController name="value" label="Valor" type="number" />
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
  );
}
