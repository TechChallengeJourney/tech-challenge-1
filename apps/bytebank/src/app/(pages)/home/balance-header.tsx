'use client';

import React from 'react';
import { Box } from '@mui/material';
import { BytebankText, useUser } from '@bytebank/shared';
import styles from './page.module.scss';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function BalanceHeader(): React.ReactElement {
  const { user } = useUser();

  const today = new Date();

  const formattedDate = format(today, "EEEE',' dd/MM/yyyy", { locale: ptBR });

  return (
    <Box className={styles.greetingBlock}>
      <BytebankText color="white" sx={{ fontWeight: 600 }} variant="md">
        {`Olá, ${user?.name?.split(' ')[0] ?? 'usuário'}! :)`}
      </BytebankText>
      <BytebankText color="white" variant="xs">
        {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
      </BytebankText>
    </Box>
  );
}
