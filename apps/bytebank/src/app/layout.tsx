import './global.scss';

import { AppWrapper } from '@bytebank/shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bytebank',
    description: 'Projeto desenvolvido para fins educacionais.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AppWrapper>{children}</AppWrapper>
            </body>
        </html>
    );
}
