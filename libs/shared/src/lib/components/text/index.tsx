'use client';
import { Typography, Box } from '@mui/material';

export interface BytebankTextProps {
  children: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  variant?: 'xs' | 'sm' | 'md' | 'lg';
  fontSize?: string;
  className?: string;
}

export function BytebankText({
  children,
  color = 'primary',
  variant = 'sm',
  fontSize = '16px',
  className = '',
}: BytebankTextProps) {
  return (
    <Box>
      <Typography className={className} fontSize={fontSize} variant={variant} color={color}>
        {children}
      </Typography>
    </Box>
  );
}
