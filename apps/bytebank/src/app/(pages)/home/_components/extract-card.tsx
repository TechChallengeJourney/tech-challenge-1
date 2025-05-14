import { BytebankExtract, BytebankText } from '@bytebank/shared';
import styles from './page.module.scss';
import { Box } from '@mui/material';

export function BytebankExtractCard() {
  return (
    <div color="white" className={styles.extract}>
      <Box>
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
