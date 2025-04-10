import { Card, Box, CardContent, Grid2 } from '@mui/material';
import { defaultTheme } from '../../shared';

export function BytebankCard({ children }) {
  return (
    <Card variant="contained">
      <Box padding={defaultTheme.spacing(2)}>
        <CardContent>

          <Grid2></Grid2>
          {children}
        </CardContent>
      </Box>
    </Card>
  );
}
