import BytebankWrapper from './wrapper';
import './global.scss';

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
                <BytebankWrapper>{children}</BytebankWrapper>
            </body>
        </html>
    );
}
