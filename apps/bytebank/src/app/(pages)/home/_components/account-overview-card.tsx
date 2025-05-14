'use client';

import { BytebankCard, BytebankIllustration, palette } from '@bytebank/shared';
import { Box } from '@mui/material';
import styles from './page.module.scss';
// import { BytebankBalanceCardContent } from '../../_components/balance-card';
import { useState } from 'react';

export function BytebankAccountOverviewCard() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <Box className={styles.cardWrapper}>
      <BytebankCard bgcolor={palette['primary.main']} className={styles.card}>
        {/* <BytebankBalanceCardContent  visible={visible} toggleVisibility={toggleVisibility} /> */}
        <Box className={styles.topRightDecoration}>
          <BytebankIllustration name="pixels-02" variant="lg" />
        </Box>
        <Box className={styles.bottomLeftDecoration}>
          <BytebankIllustration name="pixels-01" variant="lg" />
        </Box>
      </BytebankCard>
    </Box>
  );
}
