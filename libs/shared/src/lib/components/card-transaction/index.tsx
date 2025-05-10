import { Box } from '@mui/material';
import { BytebankText } from '../text';
import './style.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { BytebankInputController } from '../input/ControlledInput';
import { BytebankButton } from '../button';
import { BytebankSelectController } from '../select/ControlledSelect';
import { useUser } from '../../contexts/user.context';

export interface IForm {
  type: string;
  value: string;
}

export function BytebankTransaction() {
  const registerMethods = useForm<IForm>({
    defaultValues: {
      type: '',
      value: '',
    },
  });

  const { user } = useUser();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleTransaction = async (data: IForm) => {
    const response = await fetch(`${apiUrl}/extract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user?.id, ...data, date: new Date() }),
    });
    console.log(response);
  };

  const selectOptions = [
    { label: 'Câmbio de Moeda', value: 'Câmbio de Moeda' },
    { label: 'DOC/TED', value: 'DOC/TED' },
    { label: 'Empréstimo e Financeiro', value: 'Empréstimo e Financeiro' },
  ];

  return (
    <Box className="bytebank-card-content">
      <BytebankText fontSize="25px" color="black">
        Nova transação
      </BytebankText>
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
              // loading={isRegisterLoading}
              fullWidth
            ></BytebankButton>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
}
