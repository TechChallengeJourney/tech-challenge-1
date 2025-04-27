'use client';
import './style.scss';

import { AppBar, Box, Container } from '@mui/material';
import { BytebankMenu, Route } from '../menu';
import Link from 'next/link';
import { BytebankButton } from '../button';
import { localStorageKeys } from '../../classes/enums/local-storage';
import { useLocalStorageState } from '../../hooks/useLocalstorageState';
import { ReactElement, useState } from 'react';
import { BytebankModal } from '../modal';
import { FormProvider, useForm } from 'react-hook-form';
import { BytebankInputController } from '../input/ControlledInput';

interface HeaderProps {
  // logged?: boolean; será implementado no futuro
  routes: Route[];
  mobile?: boolean;
}


export function BytebankHeader({ routes, mobile }: HeaderProps) {
  const [openModal, setOpenModal] = useState(false);
  const methods = useForm<any>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

const handleSubmit = async (data: any) => {
  return await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
};

const handleLogin = (data: any) => {
  console.log(data)
  handleSubmit(data).then(res =>{ 
  if(res.status === 200) {    
    setIsAuth(false);
    handleCloseModal();
  } else {
    // adicionar mensagem de erro para o usuário
  }
})}

  const renderLoginModal = (isOpen: boolean): ReactElement => (
    <>
      <BytebankModal title={'Login'} illustration={'login'} illustrationSize={'md'} open={isOpen} onClose={() => handleCloseModal()}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleLogin)} noValidate>
            <BytebankInputController name="email" type="email" label="E-mail" placeholder="Digite seu e-mail" />
            <BytebankInputController name="password" type="password" label="Senha" placeholder="Digite sua senha" />
            <Box pt={2} width={'100%'}>
            <BytebankButton label={'Entrar'} color={'secondary'} variant={'contained'}></BytebankButton>
            </Box>
          </form>
        </FormProvider>
      </BytebankModal>
    </>
  );

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [isAuth, setIsAuth] = useLocalStorageState<boolean>(
    localStorageKeys.AUTH_PERMISSION,
    false
  );


  const openLoginModal = () => {
    setOpenModal(true);
  };

  const Logout = () => {
    setIsAuth(true);
  };

  return (
    <>
      <AppBar className="header" position="static">
        <Container maxWidth="md" className="container">
          <Box
            display={'flex'}
            flexDirection={'row'}
            gap={4}
            sx={{ flexGrow: 1 }}
            height="100%"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  className="logo"
                  alt="Bytebank logo"
                />
              </Link>
            </Box>
            <BytebankMenu routes={routes} mobile={mobile} />
            {isAuth ? (
              <BytebankButton
                sendSubmit={openLoginModal}
                label="Login"
                color="primary"
                variant="contained"
              />
            ) : (
              <BytebankButton
                sendSubmit={Logout}
                label="Logout"
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        </Container>
      </AppBar>
      {renderLoginModal(openModal)}
    </>
  );
}
