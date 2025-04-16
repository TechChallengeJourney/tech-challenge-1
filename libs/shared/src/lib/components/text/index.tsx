'use client';
import { Typography, Box } from '@mui/material';

export interface BytebankTextProps {
  children: string;
  color?: string;
  variant?: 'xs' | 'sm' | 'md' | 'lg';
  fontSize?: string;
}

export function BytebankText({
  children,
  color = 'primary',
  variant = 'sm',
  fontSize = '16px',
}: BytebankTextProps) {
  return (
    <Box>
      <Typography fontSize={fontSize} variant={variant} color={color}>
        {children}
      </Typography>
    </Box>
  );
}
