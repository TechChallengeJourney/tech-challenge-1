'use client';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '../../themes/default.theme';
import { BytebankHeader } from '../header';
import { Box } from '@mui/material';
import { ProviderRouteProps } from '../../classes/models/provider-route';
import { UserProvider } from '../../contexts/user.context';
import { BytebankFooter } from '../footer';

export function BytebankProvider({ canNavigate = true, children }: { routes?: ProviderRouteProps[]; canNavigate?: boolean, children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <UserProvider>
                    {canNavigate ? <BytebankHeader /> : ''}
                    <Box display={"flex"} minHeight="100vh"> {children} </Box>
                    {canNavigate ? <BytebankFooter /> : ''}
                </UserProvider>
            </ThemeProvider>
        </>
    );
}