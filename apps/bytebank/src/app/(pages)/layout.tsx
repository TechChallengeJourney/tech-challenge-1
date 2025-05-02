'use client';
import { BytebankProvider } from '@bytebank/shared';
import '../global.scss';
import { Container } from '@mui/material';

const RootLayout = ({ children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <BytebankProvider>
            <Container>{children}</Container>
        </BytebankProvider>
    );
}

export default RootLayout;