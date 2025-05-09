'use client';

import {
  BytebankCard,
  BytebankIllustration,
  BytebankText,
} from '@bytebank/shared';
import ExtractCardWrapper from './extract-card-wrapper';
import { Box, Divider, useMediaQuery, useTheme } from '@mui/material';
import { palette } from '@bytebank/shared';
import React, { useState } from 'react';
import { VisibilityRounded, VisibilityOff } from '@mui/icons-material';
import styles from './page.module.scss';

const Home: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const RenderCardSavingIllustration = () => {
    return (
      <Box
        className={
          isMobile ? styles.illustrationMobile : styles.illustrationDesktop
        }
      >
        <BytebankIllustration name="card-saving" variant="lg" />
      </Box>
    );
  };

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const renderVisibilityIconsBalance = () => {
    return (
      <div onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
        {visible ? (
          <VisibilityRounded style={{ color: 'white' }} />
        ) : (
          <VisibilityOff style={{ color: 'white' }} />
        )}
      </div>
    );
  };

  const renderBalanceContent = () => {
    return (
      <Box className={styles.balanceContainer}>
        {/* Lado esquerdo */}
        <Box className={styles.leftBlock}>
          <Box className={styles.greetingBlock}>
            <BytebankText color="white" sx={{ fontWeight: 600 }} variant="md">
              Olá, Joana! :)
            </BytebankText>
            <BytebankText color="white" variant="xs">
              Quinta-feira, 08/03/2025
            </BytebankText>
          </Box>

          {/* Ilustração renderizada apenas no desktop */}
          <Box className={styles.desktopOnly}>
            <RenderCardSavingIllustration />
          </Box>
        </Box>

        {/* Lado direito */}
        <Box className={styles.rightBlock}>
          <BytebankText color="white" sx={{ fontWeight: 600 }} variant="sm">
            Saldo
          </BytebankText>
          {renderVisibilityIconsBalance()}
          <Divider style={{ backgroundColor: 'white' }} />
          <div className={styles.balanceAccountData}>
            <BytebankText color="white" sx={{ lineHeight: '32px' }}>
              Conta Corrente
            </BytebankText>
            <BytebankText color="white" sx={{ fontWeight: 600 }} variant="md">
              {visible ? 'R$ 1200,00' : 'R$ ****'}
            </BytebankText>
          </div>
          {/* Ilustração renderizada apenas no mobile */}
          <Box className={styles.mobileOnly}>
            <RenderCardSavingIllustration />
          </Box>
        </Box>
      </Box>
    );
  };

  const firstCard = () => {
    return (
      <Box className={styles.cardWrapper}>
        <BytebankCard bgcolor={palette['primary.main']} className={styles.card}>
          {renderBalanceContent()}

          <Box className={styles.topRightDecoration}>
            <BytebankIllustration name="pixels-02" variant="lg" />
          </Box>
          <Box className={styles.bottomLeftDecoration}>
            <BytebankIllustration name="pixels-01" variant="lg" />
          </Box>
        </BytebankCard>
      </Box>
    );
  };

  return (
    <Box>
      {firstCard()}
      <ExtractCardWrapper />
    </Box>
  );
};

export default Home;
