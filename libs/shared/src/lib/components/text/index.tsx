'use client';
import { Typography, Box } from '@mui/material';

export interface BytebankTextProps {
  children: string;
  color?: string;
  variant?: 'xs' | 'sm' | 'md' | 'lg';
}

export function BytebankText({
  children,
  color = 'primary',
  variant = 'sm',
}: BytebankTextProps) {
  return (
    <Box>
      <Typography variant={variant} color={color}>
        {children}
      </Typography>
    </Box>
  );
}
