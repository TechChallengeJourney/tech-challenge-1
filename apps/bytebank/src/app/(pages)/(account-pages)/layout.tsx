'use client';
import { Container } from "@mui/material";
import { BytebankProvider } from "@bytebank/shared";

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