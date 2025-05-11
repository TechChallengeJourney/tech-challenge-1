'use client';

import React from 'react';
import { Box, Divider } from '@mui/material';
import { BytebankText } from '@bytebank/shared';
import { VisibilityOff, VisibilityRounded } from '@mui/icons-material';
import CardIllustration from './card-illustration';
import BalanceHeader from './balance-header';
import styles from './page.module.scss';

interface Props {
  visible: boolean;
  toggleVisibility: () => void;
}

const BalanceContent: React.FC<Props> = ({ visible, toggleVisibility }) => {
  return (
    <Box className={styles.balanceContainer}>
      <Box className={styles.leftBlock}>
        <BalanceHeader />
        <Box className={styles.desktopOnly}>
          <CardIllustration />
        </Box>
      </Box>

      <Box className={styles.rightBlock}>
        <div className={styles.balanceAccountWrapper}>
          <BytebankText color="white" sx={{ fontWeight: 600 }} variant="sm">
            Saldo
          </BytebankText>
          <div onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
            {visible ? (
              <VisibilityRounded style={{ color: 'white' }} />
            ) : (
              <VisibilityOff style={{ color: 'white' }} />
            )}
          </div>
        </div>
        <Divider style={{ backgroundColor: 'white' }} />
        <div className={styles.balanceAccountData}>
          <BytebankText color="white" sx={{ lineHeight: '32px' }}>
            Conta Corrente
          </BytebankText>
          <BytebankText color="white" sx={{ fontWeight: 600 }} variant="md">
            {visible ? 'R$ 1200,00' : 'R$ ****'}
          </BytebankText>
        </div>
        <Box className={styles.mobileOnly}>
          <CardIllustration />
        </Box>
      </Box>
    </Box>
  );
};

export default BalanceContent;
