'use client';
import './style.scss';

import { Alert, AlertColor, AppBar, Box, Container, Link, Snackbar } from '@mui/material';
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
  const [snackbarData, setSnackbarData] = useState<{ severity: AlertColor, message: string; } | null>(null);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useSession<User>('user');
  const isLogged = !!(user);

  const methods = useForm<{email: string; password: string;}>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (data: {email: string; password: string;}) => {
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
      const responseError = await response.json() as { error: string };
      setSnackbarData({ severity: 'error', message: responseError.error });
    }
    setSnackbarOpen(true);
  };

  const renderSnackbar = () => {
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
      setSnackbarData(null);
    };

    return (snackbarData) ? (
      <>
        <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarData.severity}
          >
            {snackbarData.message}
          </Alert>
        </Snackbar>
      </>
    ) : null;
  }

  const renderLoginModal = (isOpen: boolean): ReactElement => (
    <>
      <BytebankModal title={'Login'} illustration={'login'} illustrationSize={'md'} open={isOpen} onClose={() => closeModal()}>
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleLogin)} noValidate>
              <BytebankInputController name="email" type="email" label="E-mail" placeholder="Digite seu e-mail" />
              <BytebankInputController name="password" type="password" label="Senha" placeholder="Digite sua senha" />
              <Box display={'flex'} gap={2} flexDirection={'column'} justifyContent={'center'}>
                <Link component="button" variant="sm" color={'secondary'}>Esqueceu sua senha?</Link>
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
      {renderSnackbar()}
    </>
  );
}
