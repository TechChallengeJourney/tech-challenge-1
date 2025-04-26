import { Box } from '@mui/material';
import { BytebankText } from '../text';
import './style.scss';
import { ReactNode } from 'react';

export interface BytebankCardContentProps {
  children: ReactNode;
  title: string;
}

export function BytebankCardContent({
  children,
  title,
}: BytebankCardContentProps) {
  return (
    <Box className="bytebank-car-content">
      <BytebankText fontSize="25px" color="black">
        {title}
      </BytebankText>
      {children}
    </Box>
  );
}
