'use client';

import { ThemeProvider } from '@mui/material/styles';
// import { MenuComponent } from './menu';
import { BytebankHeader, defaultTheme } from '../shared';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BytebankHeader />
            <main>
                {/* <MenuComponent /> */}
                <div>{children}</div>
            </main>
        </ThemeProvider>
    );
}