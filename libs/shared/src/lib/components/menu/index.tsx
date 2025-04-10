'use client';
import './style.scss';
import { useTheme } from '@mui/material/styles';

import { Divider } from '../divider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface Route {
    name: string;
    route: string;
}
interface MenuProps {
    routes: Route[];
}

export function MenuComponent({routes}: MenuProps) {
    const theme = useTheme();
    const pathName = usePathname();

    return (
        <nav className="menu" style={{ fontFamily: theme.typography.fontFamily }}>
            {routes.map(route => (
                <Link className={`menu-item ${pathName === route.route ? 'active' : ''}`} href={route.route} key={route.route}>
                    {route.name}
                </Link>
            ))}
        </nav>
    );
}
