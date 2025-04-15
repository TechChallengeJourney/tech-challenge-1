'use client';
import { BytebankProvider as Provider } from '@bytebank/shared';
import '../global.scss';

const routes: Provider.ProviderRouteProps[] = [
    {
        name: 'investimentos',
        route: 'investimentos'
    },
    {
        name: 'transferências',
        route: 'transferencias'
    },
    {
        name: 'outros',
        route: 'outros'
    },
];

const RootLayout = ({ children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <Provider.BytebankProvider routes={routes}>{children}</Provider.BytebankProvider>
    );
}

export default RootLayout;