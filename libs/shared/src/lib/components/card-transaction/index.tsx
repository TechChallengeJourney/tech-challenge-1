import { Box } from '@mui/material';
import { BytebankText } from '../text';
import './style.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { BytebankInputController } from '../input/ControlledInput';
import { BytebankButton } from '../button';
import { BytebankSelectController } from '../select/ControlledSelect';

export interface IForm {
  valor: string;
  transacao: string;
}

export function BytebankTransaction() {
  const registerMethods = useForm<IForm>({
    defaultValues: {
      transacao: '',
      valor: '',
    },
  });

  const handleTransaction = (data: IForm) => {
    console.log(data);
  };

  const selectOptions = [
    { label: 'Câmbio de Moeda', value: 'cambio moeda' },
    { label: 'DOC/TED', value: 'doc/ted' },
    { label: 'Empréstimo e Financeiro', value: 'emprestimo e financeiro' },
  ];

  return (
    <Box className="bytebank-card-content">
      <BytebankText fontSize="25px" color="black">
        Nova transação
      </BytebankText>
      <FormProvider {...registerMethods}>
        <form onSubmit={registerMethods.handleSubmit(handleTransaction)}>
          <BytebankSelectController
            name="transacao"
            label="Selecione o tipo de transação"
            options={selectOptions}
          />
          <BytebankInputController name="valor" label="Valor" type="number" />
          <Box display={'flex'} pt={2} justifyContent={'center'}>
            <BytebankButton
              label={'Criar conta'}
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
