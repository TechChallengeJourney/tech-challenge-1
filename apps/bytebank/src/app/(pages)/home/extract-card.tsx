import { BytebankExtract, BytebankText } from '@bytebank/shared';
import styles from './page.module.scss';
import { Box } from '@mui/material';

export interface Transaction {
  date: Date;
  type: 'Depósito' | 'Saque' | 'Transferência';
  value: number;
}

export interface BytebankExtractProps {
  month: string;
  data: Transaction[];
}

export default function ExtractCard() {
  return (
    <div color="white" className={styles.extract}>
      <Box className={styles.extractContent}>
        <BytebankExtract
          title={
            <BytebankText color="primary" fontSize="24px" fontWeight={600}>
              Extrato
            </BytebankText>
          }
        />
      </Box>
    </div>
  );
}
