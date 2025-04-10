'use client';
import './style.scss';
import { useTheme } from '@mui/material/styles';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AppBar, Box, Typography } from '@mui/material';
import { Divider } from '../divider';
import { MenuComponent, Route } from '../menu';
import Image from 'next/image';

import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { useDemoRouter } from '@toolpad/core/internal';
import { DashboardLayout } from '@toolpad/core';


interface HeaderProps {
    logged?: boolean;
}

const NAVIGATION: Navigation = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
    },
    {
        segment: 'orders',
        title: 'Orders',
    },
];

function DemoPageContent({ pathname }: { pathname: string }) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
}

export function BytebankHeader({
    logged = false
}: HeaderProps) {

    const theme = useTheme();
    const pathName = usePathname();

    const routes: Route[] = [
        {
            name: 'investimentos',
            route: 'investimentos'
        }
    ]

    const router = useDemoRouter('/');

    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
                title: 'MUI',
                homeUrl: '/',
            }}
            router={router}
        >
            <DashboardLayout>
                {/* <div></div> */}
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>

        </AppProvider>
    );
}
