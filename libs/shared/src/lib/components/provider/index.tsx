'use client';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '../../themes/default.theme';
import { BytebankHeader } from '../header';
import { Box } from '@mui/material';
import { ProviderRouteProps } from '../../classes/models/provider-route';

export function BytebankProvider({ canNavigate = true, routes = [], children }: { routes?: ProviderRouteProps[]; canNavigate?: boolean, children: React.ReactNode }) {
    return (
        <>
        <ThemeProvider theme={defaultTheme}>
            {canNavigate ? <BytebankHeader routes={routes} /> : ''}
            <Box display={"flex"} minHeight="100vh"> {children} </Box>
        </ThemeProvider>
        </>
    );
}