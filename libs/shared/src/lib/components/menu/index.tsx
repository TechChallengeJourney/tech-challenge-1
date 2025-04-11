'use client';
import './style.scss';
import { useTheme } from '@mui/material/styles';

import { Divider } from '../divider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Box, Drawer, Typography } from '@mui/material';
import { useState } from 'react';
import { BytebankButton } from '../button';

export interface Route {
  name: string;
  route: string;
}
interface MenuProps {
  routes: Route[];
}

export function MenuComponent({ routes }: MenuProps) {
  const theme = useTheme();
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const routess = routes.map((route) => (
    <Link
      className={`menu-item ${pathName === route.route ? 'active' : ''}`}
      href={route.route}
      key={route.route}
    >
      <Typography
        variant="sm"
        textTransform="capitalize"
        fontWeight="600"
        color={'success'}
      >
        {route.name}
      </Typography>
    </Link>
  ));

  return (
    <Box
      display="flex"
      gap={2}
      alignItems="center"
      style={{ fontFamily: theme.typography.fontFamily }}
    >
      <Box className="menu-mobile">
        {/* botão temporário */}
        <BytebankButton
          sendSubmit={toggleDrawer(true)}
          label="menu-mobile"
          color="primary"
        ></BytebankButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {routess}
        </Drawer>
      </Box>
      <Box className="menu-desktop" gap={2}>
        {routess}
      </Box>
    </Box>
  );
}
