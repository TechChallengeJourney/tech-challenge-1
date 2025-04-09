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
  type?: 'xs' | 'sm' | 'md' | 'lg';
}

export function BytebankText({
  label,
  color = 'primary',
  type = 'sm',
}: BytebankTextProps) {
  return (
    <Box>
      <Typography variant={type} color={color}>
        {label}
      </Typography>
    </Box>
  );
}
