'use client';

import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { BytebankIllustration } from '@bytebank/shared';
import styles from './page.module.scss';

export function CardIllustration(): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={isMobile ? styles.illustrationMobile : styles.illustrationDesktop}>
      <BytebankIllustration name="card-saving" variant="lg" />
    </Box>
  );
};

