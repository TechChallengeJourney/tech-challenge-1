'use client';

import { ThemeProvider } from '@mui/material/styles';
import { MenuComponent } from './menu';
import { defaultTheme } from '../shared';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <main>
                <MenuComponent />
                <div>{children}</div>
            </main>
        </ThemeProvider>
    );
}