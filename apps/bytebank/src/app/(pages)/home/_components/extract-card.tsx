import { BytebankExtract, BytebankText } from '@bytebank/shared';
import styles from './page.module.scss';
import { Box } from '@mui/material';

type Props = {
  refresh?: boolean;
};

export function BytebankExtractCard({ refresh }: Props) {
  return (
    <div color="white" className={styles.extract}>
      <Box>
        <BytebankExtract
          key={refresh ? 'refresh-true' : 'refresh-false'} // <- força recriação do componente
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
