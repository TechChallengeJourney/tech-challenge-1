'use client';
import './style.scss';
import { useTheme } from '@mui/material/styles';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Box, Drawer, Typography } from '@mui/material';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export interface Route {
  name: string;
  route: string;
}
interface MenuProps {
    routes: Route[];
    mobile?: boolean;
}

export function BytebankMenu({ routes, mobile }: MenuProps) {
    const theme = useTheme();
    const pathName = usePathname();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const mappedRoutes = (
        routes.map(route => (
            <Link className={`menu-item ${pathName === route.route ? 'active' : ''}`} href={route.route} key={route.route}>
                <Typography variant="sm" textTransform="capitalize" fontWeight="500" color={'success'} >{route.name}</Typography>
            </Link>
        ))
    )

    return (
        <Box className={mobile ? 'mobile' : ''} display="flex" gap={2} alignItems="center" style={{ fontFamily: theme.typography.fontFamily }}>
            <Box className="menu-mobile" alignItems="center">
                <IconButton
                    aria-label="open menu"
                    onClick={toggleDrawer(true)}
                    edge="start"
                    sx={{
                        height: 'fit-content'
                    }}
                >
                    <MenuIcon color="success" fontSize="large" />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <Box display="flex" flexDirection="column" p={2} onClick={toggleDrawer(false)}>
                        {mappedRoutes}
                    </Box>
                </Drawer>
            </Box>
            <Box className="menu-desktop" gap={2}>
                {mappedRoutes}
            </Box>
        </Box>
    );
}
