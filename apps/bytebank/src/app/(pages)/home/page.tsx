'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { BytebankBalanceCard } from '../_components/balance-card';
import { BytebankCardTransaction } from '../_components/card-transaction';
import { BytebankExtractCard } from './_components';
import styles from './page.module.scss';

const BytebankHome: React.FC = () => {
  const [updateExtract, setUpdateExtract] = useState(false);

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const refreshExtract = () => {
    return (
      <>
        <BytebankExtractCard refresh={updateExtract} />
      </>
    );
  };

  const refreshTransactionCallback = () => {
    return (
      <>
        <BytebankCardTransaction
          onSuccess={() => setUpdateExtract((prev) => !prev)}
        />
      </>
    );
  };

  if (isMobileOrTablet) {
    // Mobile / Tablet: Balance → Extract → Transaction
    return (
      <div className={styles.pageWrapper}>
        <Box className={styles.containerPage}>
          <BytebankBalanceCard />
          {refreshExtract()}
          {refreshTransactionCallback()}
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
          {refreshTransactionCallback()}
        </Box>
        <Box className={styles.rightColumn}>{refreshExtract()}</Box>
      </Box>
    </div>
  );
};

export default BytebankHome;
