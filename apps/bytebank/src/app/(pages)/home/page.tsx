'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import ExtractCard from './extract-card';
import { AccountOverviewCard } from './account-overview-card';
import styles from './page.module.scss';

const Home: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <Box className={styles.containerPage}>
      <AccountOverviewCard
        visible={visible}
        toggleVisibility={toggleVisibility}
      />
      <ExtractCard />
    </Box>
  );
};

export default Home;
