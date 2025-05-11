'use client';

import React from 'react';
import { Box } from '@mui/material';
import { BytebankCard, BytebankIllustration } from '@bytebank/shared';
import BalanceContent from './balance-content';
import { palette } from '@bytebank/shared';
import styles from './page.module.scss';

interface Props {
  visible: boolean;
  toggleVisibility: () => void;
}

const AccountOverviewCard: React.FC<Props> = ({ visible, toggleVisibility }) => (
  <Box className={styles.cardWrapper}>
    <BytebankCard bgcolor={palette['primary.main']} className={styles.card}>
      <BalanceContent visible={visible} toggleVisibility={toggleVisibility} />
      <Box className={styles.topRightDecoration}>
        <BytebankIllustration name="pixels-02" variant="lg" />
      </Box>
      <Box className={styles.bottomLeftDecoration}>
        <BytebankIllustration name="pixels-01" variant="lg" />
      </Box>
    </BytebankCard>
  </Box>
);

export default AccountOverviewCard;
