'use client';

import React from 'react';
import { Box, Divider, Skeleton } from '@mui/material';
import { BytebankText, useFinancialSummary } from '@bytebank/shared';
import { VisibilityOff, VisibilityRounded } from '@mui/icons-material';
import { CardIllustration } from './card-illustration';
import { BalanceHeader } from './balance-header';
import styles from './page.module.scss';

interface Props {
  visible: boolean;
  toggleVisibility: () => void;
}

export function BalanceContent({ visible, toggleVisibility }: Props) {
  const { totalDeposits, totalWithdrawals, isLoading } = useFinancialSummary();

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
          {isLoading ? (
            <Skeleton width={100} height={32} animation="wave" />
          ) : (
            <BytebankText color="white" sx={{ fontWeight: 600 }} variant="md">
              {visible ? `R$ ${totalBalance.toString()}` : 'R$ ****'}
            </BytebankText>
          )}
        </div>
        <Box className={styles.mobileOnly}>
          <CardIllustration />
        </Box>
      </Box>
    </Box>
  );
};
