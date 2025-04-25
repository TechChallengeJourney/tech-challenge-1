'use client';
import { BytebankProvider, routes } from '@bytebank/shared';
import '../global.scss';
import { Container } from '@mui/material';

const RootLayout = ({ children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <BytebankProvider routes={routes}>
            <Container>{children}</Container>
        </BytebankProvider>
    );
}

export default RootLayout;