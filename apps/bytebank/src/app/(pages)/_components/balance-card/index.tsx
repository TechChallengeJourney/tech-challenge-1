'use client';

import { BytebankCard, BytebankIllustration, palette } from '@bytebank/shared';
import { Box } from '@mui/material';

import { useState } from 'react';

import { BytebankBalanceHeader } from './balance-header';
import { BytebankBalanceInfo } from './balance-info';

import styles from './page.module.scss';

export function BytebankBalanceCard(): React.ReactElement {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <Box className={styles.cardWrapper}>
      <BytebankCard bgcolor={palette['primary.main']} className={styles.card}>
        <Box className={styles.topRightDecoration}>
          <BytebankIllustration name="pixels-02" variant="lg" />
        </Box>
        <Box className={styles.bottomLeftDecoration}>
          <BytebankIllustration name="pixels-01" variant="lg" />
        </Box>
        <BytebankBalanceHeader />
        <BytebankBalanceInfo
          visible={visible}
          toggleVisibility={toggleVisibility}
        />
      </BytebankCard>
    </Box>
  );
}
