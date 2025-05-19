import { Box } from '@mui/material';
import { BytebankText, BytebankCard, palette } from '@bytebank/shared';
import './style.scss';
import '../../(financial-pages)/_components/card-transaction/style.scss';

export function BytebankServices() {
  return (
    <BytebankCard
      className="bytebank-card-content"
      bgcolor={palette['grey.300']}
    >
      <Box p={4}>
        <BytebankText variant="lg" color="black">
          Confira os serviços disponíveis
        </BytebankText>
      </Box>

      <Box className="servicesWrapper">
        <Box sx={{ background: 'red' }} height={167}>
          1
        </Box>{' '}
        <Box sx={{ background: 'red' }} height={167}>
          1
        </Box>{' '}
        <Box sx={{ background: 'red' }} height={167}>
          1
        </Box>{' '}
        <Box sx={{ background: 'red' }} height={167}>
          1
        </Box>{' '}
        <Box sx={{ background: 'red' }} height={167}>
          1
        </Box>{' '}
        <Box sx={{ background: 'red' }} height={167}>
          1
        </Box>
      </Box>
    </BytebankCard>
  );
}
