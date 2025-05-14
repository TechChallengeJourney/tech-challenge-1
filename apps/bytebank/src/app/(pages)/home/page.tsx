'use client';

import React, { useState, useCallback } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { BytebankBalanceCard } from '../_components/balance-card';
import { BytebankCardTransaction } from '../_components/card-transaction';
import { BytebankExtractCard } from './_components';
import styles from './page.module.scss';

const BytebankHome: React.FC = () => {
  const [shouldRefreshExtract, setShouldRefreshExtract] = useState(false);

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // useCallback p/ evitar re-renderizações desnecessárias
  const handleTransactionSuccess = useCallback(() => {
    setShouldRefreshExtract(prev => !prev);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Box className={styles.containerPage}>
        {isMobileOrTablet ? (
          <>
            <BytebankBalanceCard />
            <BytebankExtractCard refresh={shouldRefreshExtract} />
            <BytebankCardTransaction onSuccess={handleTransactionSuccess} />
          </>
        ) : (
          <>
            <Box className={styles.leftColumn}>
              <BytebankBalanceCard />
              <BytebankCardTransaction onSuccess={handleTransactionSuccess} />
            </Box>
            <Box className={styles.rightColumn}>
              <BytebankExtractCard refresh={shouldRefreshExtract} />
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default BytebankHome;
