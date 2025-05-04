'use client';
import './style.scss';

import {
  Alert,
  AlertColor,
  AppBar,
  Box,
  Container,
  Link,
  Snackbar,
  MenuItem,
  Typography,
  Menu,
  IconButton,
  Avatar,
  LinearProgress,
} from '@mui/material';
import { BytebankMenu } from '../menu';
import { BytebankButton } from '../button';
import { ReactElement, useState } from 'react';
import { BytebankModal } from '../modal';
import { FormProvider, useForm } from 'react-hook-form';
import { BytebankInputController } from '../input/ControlledInput';
import { User } from '../../classes/models/user';
import { BytebankText } from '../text';
import {
  loggedRoutes,
  unloggedRoutes,
} from '../../classes/constants/routes.config';
import { useUser } from '../../contexts/user.context';
import { useSession } from '../../hooks/use-session';

interface HeaderProps {
  mobile?: boolean;
}

export function BytebankHeader({ mobile }: HeaderProps) {
  const [sessionUser, setSessionUser] = useSession<User | null>('user');
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [snackbarData, setSnackbarData] = useState<{
    severity: AlertColor;
    message: string;
  } | null>(null);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [isRegisterLoading, setRegisterLoading] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const { user, setUser, loading } = useUser();
  const isLogged = !!user;
  const settings = [
    { name: 'Minha conta', action: () => handleCloseUserMenu() },
    { name: 'Sair', action: () => handleLogout() },
  ];

  const loginMethods = useForm<{ email: string; password: string }>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const registerMethods = useForm<Partial<User>>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const closeLoginModal = () => {
    loginMethods.reset();
    setOpenLoginModal(false);
  };

  const closeRegisterModal = () => {
    registerMethods.reset();
    setOpenRegisterModal(false);
  };

  const handleLoginModal = () => {
    closeRegisterModal();
    setOpenLoginModal(true);
  };

  const handleRegisterModal = () => {
    closeLoginModal();
    setOpenRegisterModal(true);
  };

  const handleLogout = (): void => {
    handleCloseUserMenu();
    setUser(null);
  };

  const handleRegister = async (data: Partial<User>) => {
    setRegisterLoading(true);
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const res = (await response.json()) as { message: string };
      setSnackbarData({ severity: 'success', message: res.message });
      closeRegisterModal();
    } else {
      const responseError = (await response.json()) as { error: string };
      setSnackbarData({ severity: 'error', message: responseError.error });
    }
    setRegisterLoading(false);
    setSnackbarOpen(true);
  };

  const handleLogin = async (data: { email: string; password: string }) => {
    setLoginLoading(true);
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const userData = (await response.json()) as User;
      setUser(userData);
      closeLoginModal();
      setSessionUser(userData);
    } else {
      const responseError = (await response.json()) as { error: string };
      setSnackbarData({ severity: 'error', message: responseError.error });
    }
    setLoginLoading(false);
    setSnackbarOpen(true);
  };

  const renderSnackbar = () => {
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
      setSnackbarData(null);
    };

    return snackbarData ? (
      <>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarData.severity}>
            {snackbarData.message}
          </Alert>
        </Snackbar>
      </>
    ) : null;
  };

  const renderRegisterModal = (isOpen: boolean): ReactElement => (
    <>
      <BytebankModal
        title={'Criar uma conta'}
        illustration={'register'}
        illustrationSize={'lg'}
        open={isOpen}
        onClose={() => closeRegisterModal()}
      >
        <>
          <BytebankText>
            Preencha os campos abaixo para criar sua conta corrente!
          </BytebankText>
          <FormProvider {...registerMethods}>
            <form onSubmit={registerMethods.handleSubmit(handleRegister)}>
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
              <Box display={'flex'} pt={2} justifyContent={'center'}>
                <BytebankButton
                  label={'Criar conta'}
                  color={'secondary'}
                  variant={'contained'}
                  loading={isRegisterLoading}
                  fullWidth
                ></BytebankButton>
              </Box>
            </form>
          </FormProvider>
          <Box pt={4} display={'flex'} gap={1} justifyContent={'center'}>
            <BytebankText>Já tem uma conta?</BytebankText>
            <Link
              component="button"
              variant="sm"
              color={'secondary'}
              onClick={handleLoginModal}
            >
              Fazer login
            </Link>
          </Box>
        </>
      </BytebankModal>
    </>
  );

  const renderLoginModal = (isOpen: boolean): ReactElement => (
    <>
      <BytebankModal
        title={'Login'}
        illustration={'login'}
        illustrationSize={'lg'}
        open={isOpen}
        onClose={() => closeLoginModal()}
      >
        <>
          <FormProvider {...loginMethods}>
            <form onSubmit={loginMethods.handleSubmit(handleLogin)}>
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
              <Box
                display={'flex'}
                gap={2}
                flexDirection={'column'}
                justifyContent={'center'}
              >
                <Link component="button" variant="sm" color={'secondary'}>
                  Esqueceu sua senha?
                </Link>
                <BytebankButton
                  label={'Entrar'}
                  color={'secondary'}
                  variant={'contained'}
                  loading={isLoginLoading}
                  fullWidth
                ></BytebankButton>
              </Box>
            </form>
          </FormProvider>
          <Box pt={4} display={'flex'} gap={1} justifyContent={'center'}>
            <BytebankText>Não tem uma conta?</BytebankText>{' '}
            <Link
              component="button"
              variant="sm"
              color={'secondary'}
              onClick={handleRegisterModal}
            >
              Crie uma agora!
            </Link>
          </Box>
        </>
      </BytebankModal>
    </>
  );

  const renderMenuSettings = () => {
    return (
      <>
        <Box sx={{ flexGrow: 0 }} className={'menu-settings'}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting.name} onClick={setting.action}>
                <Typography sx={{ textAlign: 'center' }}>
                  {setting.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <LinearProgress color={'primary'} />
      ) : (
        <AppBar
          className={`header ${isLogged ? 'header--logged' : ''}`}
          position="static"
        >
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
              <BytebankMenu
                isLogged={isLogged}
                routes={isLogged ? loggedRoutes : unloggedRoutes}
                mobile={mobile}
              />

              {!isLogged ? (
                <Box display={'flex'} flex={'none'} gap={2}>
                  <BytebankButton
                    sendSubmit={handleRegisterModal}
                    label="Crie uma conta"
                    color="success"
                    variant="contained"
                  />
                  <BytebankButton
                    sendSubmit={handleLoginModal}
                    label="Entre"
                    color="success"
                    variant="outlined"
                  />
                </Box>
              ) : (
                ''
              )}
              {renderMenuSettings()}
            </Box>
          </Container>
        </AppBar>
      )}

      {renderRegisterModal(openRegisterModal)}
      {renderLoginModal(openLoginModal)}
      {renderSnackbar()}
    </>
  );
}
