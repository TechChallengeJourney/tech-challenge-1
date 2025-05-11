'use client';

import React from 'react';
import { Box } from '@mui/material';
import { BytebankText } from '@bytebank/shared';
import styles from './page.module.scss';

const BalanceHeader: React.FC = () => (
  <Box className={styles.greetingBlock}>
    <BytebankText color="white" sx={{ fontWeight: 600 }} variant="md">
      Olá, Joana! :)
    </BytebankText>
    <BytebankText color="white" variant="xs">
      Quinta-feira, 08/03/2025
    </BytebankText>
  </Box>
);

export default BalanceHeader;
