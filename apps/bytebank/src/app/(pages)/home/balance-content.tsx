'use client';

import React from 'react';
import { Box, Divider } from '@mui/material';
import { BytebankText } from '@bytebank/shared';
import { VisibilityOff, VisibilityRounded } from '@mui/icons-material';
import CardIllustration from './card-illustration';
import BalanceHeader from './balance-header';
import styles from './page.module.scss';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useFinancialSummary } from 'libs/shared/src/lib/contexts/financial-summary.context';

interface Props {
  visible: boolean;
  toggleVisibility: () => void;
}

const BalanceContent: React.FC<Props> = ({ visible, toggleVisibility }) => {
  const { totalDeposits, totalWithdrawals } = useFinancialSummary();

  console.log('totalDeposits', totalDeposits);
  console.log('totalWithdrawals', totalWithdrawals);

  const totalBalance = totalDeposits - totalWithdrawals;

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
            {visible ? `R$ ${totalBalance.toString()}` : 'R$ ****'}
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
