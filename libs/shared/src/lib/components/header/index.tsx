'use client';
import './style.scss';

import { AppBar, Box, Container } from '@mui/material';
import { BytebankMenu, Route } from '../menu';
import Link from 'next/link';
import { BytebankButton } from '../button';
import { localStorageKeys } from '../../enum';
import { useLocalStorageState } from '../../hooks/use-localstorage-state';

interface HeaderProps {
  // logged?: boolean; será implementado no futuro
  routes: Route[];
  mobile?: boolean;
}

export function BytebankHeader({ routes, mobile }: HeaderProps) {
  const [isAuth, setIsAuth] = useLocalStorageState<boolean>(
    localStorageKeys.AUTH_PERMISSION,
    false
  );
  const Login = () => {
    setIsAuth(false);
  };

  const Logout = () => {
    setIsAuth(true);
  };

  return (
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
              sendSubmit={Login}
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
  );
}
