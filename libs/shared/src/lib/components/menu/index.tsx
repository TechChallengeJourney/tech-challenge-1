'use client';
import './style.scss';
import { useTheme } from '@mui/material/styles';

import { Divider } from '../divider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function MenuComponent() {

    const theme = useTheme();
    const pathName = usePathname();

    return (
        <nav className="card container" style={{ fontFamily: theme.typography.fontFamily }}>
            <Link className={`menu-item ${pathName === '/' ? 'active' : ''}`} href="/">
                Início
            </Link>
            <Divider />
            <Link className={`menu-item ${pathName === '/transferencias' ? 'active' : ''}`} href="/transferencias">
                Transferências
            </Link>
            <Divider />
            <Link className={`menu-item ${pathName === '/investimentos' ? 'active' : ''}`} href="/investimentos">
                Investimentos
            </Link>
            <Divider />
            <Link className={`menu-item ${pathName === '/outros' ? 'active' : ''}`} href="/outros">
                Outros serviços
            </Link>
        </nav>
    );
}
