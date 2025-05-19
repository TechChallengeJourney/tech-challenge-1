'use client';

import React, { useState, useCallback } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { BytebankCardTransaction } from '../../_components/card-transaction';

const BytebankHome: React.FC = () => {
  const [shouldRefreshExtract, setShouldRefreshExtract] = useState(false);

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // useCallback p/ evitar re-renderizações desnecessárias
  const handleTransactionSuccess = useCallback(() => {
    setShouldRefreshExtract(prev => !prev);
  }, []);

  return (
      <Box>
        <BytebankCardTransaction onSuccess={handleTransactionSuccess} />
      </Box>
  );
};

export default BytebankHome;
