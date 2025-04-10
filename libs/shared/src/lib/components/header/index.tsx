'use client';
import './style.scss';

import { AppBar, Box, Container } from '@mui/material';
import { BytebankMenu, Route } from '../menu';
import Link from 'next/link';

interface HeaderProps {
    // logged?: boolean; será implementado no futuro
    routes: Route[]
}

export function BytebankHeader({
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
                    <BytebankMenu routes={routes} />
                </Box>
            </Container>
        </AppBar>
    );
}
