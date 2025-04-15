'use client';

import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '../../themes/default.theme';
import { BytebankHeader } from '../header';
import { Container, Box } from '@mui/material';

export interface ProviderRouteProps {
    name: string;
    route: string;
}

export function BytebankProvider({ canNavigate = true, routes = [], children }: { routes?: ProviderRouteProps[]; canNavigate?: boolean, children: React.ReactNode }) {
    return (
        <>
        <ThemeProvider theme={defaultTheme}>
            {canNavigate ? <BytebankHeader routes={routes} /> : ''}
            <Container>
                <Box display={"flex"} minHeight="100vh"> {children} </Box>
            </Container>
        </ThemeProvider>
        </>
    );
}