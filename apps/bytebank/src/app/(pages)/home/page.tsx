'use client';

import { Box } from '@mui/material';
import React from 'react';
import { BytebankBalanceCard } from '../_components/balance-card';
import { BytebankCardTransaction } from '../_components/card-transaction';
import { BytebankExtractCard } from './_components';
import styles from './page.module.scss';

const BytebankHome: React.FC = () => {
  return (
    <Box className={styles.containerPage}>
      <BytebankBalanceCard />
      <BytebankExtractCard />
      <BytebankCardTransaction />
    </Box>
  );
};

export default BytebankHome;
