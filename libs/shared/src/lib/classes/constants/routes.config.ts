import { ProviderRouteProps } from "../models/provider-route";

export const unloggedRoutes: ProviderRouteProps[] = [
    {
        name: 'Sobre',
        route: '/'
    },
    {
        name: 'Serviços',
        route: '#servicos'
    },
];

export const loggedRoutes: ProviderRouteProps[] = [
    {
        name: 'início',
        route: '/'
    },
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