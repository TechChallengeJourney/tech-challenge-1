'use client';

import { ThemeProvider } from '@mui/material/styles';
import { BytebankHeader, defaultTheme } from '@bytebank/shared';

const routes = [
    {
        name: 'investimentos',
        route: 'investimentos'
    },
    {
        name: 'transferências',
        route: 'transferencias'
    },
    {
        name: 'outros',
        route: 'outros'
    },
]

export default function BytebankWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BytebankHeader routes={routes} />
            <main>
                <div>{children}</div>
            </main>
        </ThemeProvider>
    );
}