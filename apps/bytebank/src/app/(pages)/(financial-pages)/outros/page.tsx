'use client';
import { useState } from 'react';
import { BytebankBalanceCard } from '../_components/balance-card';
import { BytebankExtractCard } from '../home/_components';
import styles from './page.module.scss';
import { BytebankServices } from '../_components/card-services';

export default function Outros() {
  return (
    <div className={styles.pageWrapper}>
      <BytebankBalanceCard />
      <BytebankExtractCard />

      <BytebankServices />
    </div>
  );
}
