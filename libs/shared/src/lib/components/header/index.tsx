'use client';
import './style.scss';

import { AppBar, Box, Container } from '@mui/material';
import { Divider } from '../divider';
import { MenuComponent, Route } from '../menu';
import Link from 'next/link';

interface HeaderProps {
    logged?: boolean;
    routes: Route[]
}

export function BytebankHeader({
    logged = false,
    routes
}: HeaderProps) {
    return (
        <AppBar className="header" position="static">
            <Container maxWidth="md" className="container">
                <Box display={'flex'} flexDirection={'row'} gap={4} sx={{ flexGrow: 1 }} height="100%">
                    <Box display="flex" alignItems="center">
                        <Link href="/">
                            <img src="/logo.png" className='logo' alt="Bytebank logo" />
                        </Link>
                    </Box>
                    <MenuComponent routes={routes} />
                </Box>
            </Container>
        </AppBar>
    );
}
