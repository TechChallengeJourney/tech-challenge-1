'use client';
import './style.scss';
import { BytebankButton, BytebankCard, BytebankInputController, BytebankText, palette, User, useUser } from '@bytebank/shared';
import { Box } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

export default function Index(): ReactElement {
  const [isLoading, setLoading] = useState(false);
  const { user } = useUser();
  const formMethods = useForm<Partial<User>>({
    defaultValues: {
      name: '', 
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    formMethods.reset({
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    });
  }, [user, formMethods]);

  return (
    <Box mt={4} className='my-account'>
      <BytebankCard bgcolor={palette['grey.300']} className='my-account__card'>
        <Box p={4}>
          <BytebankText variant={'lg'}>Minha conta</BytebankText>
          <Box mt={4} display={'flex'} flexDirection={'row'}>
            <Box>
              <img src={'/images/my-account.png'} alt={'Imagem referente a minha conta.'} />
            </Box>
            <Box flex={'auto'}>
              <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit((data) => { console.log(data) })}>
                  <BytebankInputController
                    name="name"
                    type="text"
                    label="Nome"
                    placeholder="Digite seu nome"
                  />
                  <BytebankInputController
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                  />
                  <BytebankInputController
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                  />
                  <Box display={'flex'} pt={4} justifyContent={'start'}>
                    <BytebankButton
                      label={'Salvar alterações'}
                      color={'secondary'}
                      variant={'contained'}
                      loading={isLoading}
                      fullWidth
                    ></BytebankButton>
                  </Box>
                </form>
              </FormProvider>
            </Box>
          </Box>
        </Box>
      </BytebankCard>
    </Box>
  );
}
