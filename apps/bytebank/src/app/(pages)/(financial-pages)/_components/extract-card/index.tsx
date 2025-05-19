import { BytebankExtract, BytebankText } from '@bytebank/shared';
import styles from './page.module.scss';
import { Box } from '@mui/material';

type Props = {
  refresh?: boolean;
};

export function BytebankExtractCard({ refresh }: Props) {
  return (
      <Box className={styles.extract}>
        <BytebankExtract
          key={refresh ? 'refresh-true' : 'refresh-false'} // <- força recriação do componente
        />
      </Box>
  );
}
