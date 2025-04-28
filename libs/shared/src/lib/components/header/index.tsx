'use client';
import './style.scss';

import { AppBar, Box, Container, Link } from '@mui/material';
import { BytebankMenu, Route } from '../menu';
import { BytebankButton } from '../button';
import { ReactElement, useState } from 'react';
import { BytebankModal } from '../modal';
import { FormProvider, useForm } from 'react-hook-form';
import { BytebankInputController } from '../input/ControlledInput';
import useSession from '../../hooks/use-session';
import { User } from '../../classes/models/user';
import { BytebankText } from '../text';

interface HeaderProps {
  routes: Route[];
  mobile?: boolean;
}


export function BytebankHeader({ routes, mobile }: HeaderProps) {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useSession<User>('user');
  const isLogged = !!(user);

  const methods = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

const handleLogin = async (data: User) => {
  const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const userData = await response.json();
      setUser<User>(userData);
      closeModal();
    } else {
      // Handle login failure
    }
};

  const renderLoginModal = (isOpen: boolean): ReactElement => (
    <>
      <BytebankModal title={'Login'} illustration={'login'} illustrationSize={'md'} open={isOpen} onClose={() => closeModal()}>
        <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleLogin)} noValidate>
            <BytebankInputController name="email" type="email" label="E-mail" placeholder="Digite seu e-mail" />
            <BytebankInputController name="password" type="password" label="Senha" placeholder="Digite sua senha" />
            <Box pt={2}>
            <BytebankButton label={'Entrar'} color={'secondary'} variant={'contained'} fullWidth></BytebankButton>
            </Box>
          </form>
        </FormProvider>
        <Box pt={4} display={'flex'} gap={1} justifyContent={'center'}><BytebankText>Não tem uma conta?</BytebankText> <Link component="button" variant="sm" color={'secondary'}
      onClick={() => {
        console.info("open register modal");
      }}>Crie uma agora!</Link>
      </Box>
        </>
      </BytebankModal>
    </>
  );

  const closeModal = () => {
    setOpenModal(false);
  };

  const openLoginModal = () => {
    setOpenModal(true);
  };

  const Logout = () => {
    setUser<User>(null);
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
            {!isLogged ? (
              <BytebankButton
                sendSubmit={openLoginModal}
                label="Login"
                color="secondary"
                variant="contained"
              />
            ) : (
              <BytebankButton
                sendSubmit={Logout}
                label="Logout"
                color="secondary"
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
