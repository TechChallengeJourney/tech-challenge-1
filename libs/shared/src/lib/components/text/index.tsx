'use client';
import { Typography, Box } from '@mui/material';

export interface BytebankTextProps {
  label: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  variant?: 'xs' | 'sm' | 'md' | 'lg';
}

export function BytebankText({
  label,
  color = 'primary',
  variant = 'sm',
}: BytebankTextProps) {
  return (
    <Box>
      <Typography variant={variant} color={color}>
        {label}
      </Typography>
    </Box>
  );
}
