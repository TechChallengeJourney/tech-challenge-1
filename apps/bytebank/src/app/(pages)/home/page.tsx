'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { BytebankBalanceCard } from '../_components/balance-card';
import { BytebankCardTransaction } from '../_components/card-transaction';
import { BytebankExtractCard } from './_components';
import styles from './page.module.scss';

const BytebankHome: React.FC = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('lg'));

  if (isMobileOrTablet) {
    // Mobile / Tablet: Balance → Extract → Transaction
    return (
      <div className={styles.pageWrapper}>
        <Box className={styles.containerPage}>
          <BytebankBalanceCard />
          <BytebankExtractCard />
          <BytebankCardTransaction />
        </Box>
      </div>
    );
  }

  // Desktop: left (Balance + Transaction), right (Extract)
  return (
    <div className={styles.pageWrapper}>
      <Box className={styles.containerPage}>
        <Box className={styles.leftColumn}>
          <BytebankBalanceCard />
          <BytebankCardTransaction />
        </Box>
        <Box className={styles.rightColumn}>
          <BytebankExtractCard />
        </Box>
      </Box>
    </div>
  );
};

export default BytebankHome;
