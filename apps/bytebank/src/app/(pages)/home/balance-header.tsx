'use client';

import React from 'react';
import { Box } from '@mui/material';
import { BytebankText } from '@bytebank/shared';
import styles from './page.module.scss';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useUser } from 'libs/shared/src/lib/contexts/user.context';

const BalanceHeader: React.FC = () => {
  const { user } = useUser();

  const today = new Date();

  const formattedDate = format(today, "EEEE',' dd/MM/yyyy", { locale: ptBR });

  return (
    <Box className={styles.greetingBlock}>
      <BytebankText color="white" sx={{ fontWeight: 600 }} variant="md">
        {`Olá, ${user?.name ?? 'usuário'}! :)`}
      </BytebankText>
      <BytebankText color="white" variant="xs">
        {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
      </BytebankText>
    </Box>
  );
};

export default BalanceHeader;
