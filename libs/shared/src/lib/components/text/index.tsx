'use client';
import { Typography, TypographyProps, Box } from '@mui/material';

export interface BytebankTextProps extends TypographyProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'info' | 'dark' | 'light';
  variant?: 'h1' | 'xs' | 'sm' | 'md' | 'lg';
  fontSize?: string;
}

export function BytebankText({
  children,
  color,
  variant,
  fontSize,
  ...props // Captura todas as props adicionais do Typography, caso a prop utilizada não funcione adicione a esse componente aqui.
}: BytebankTextProps) {
  return (
    <Box>
      <Typography
        {...props}
        fontSize={fontSize}
        variant={variant}
        color={color}
      >
        {children}
      </Typography>
    </Box>
  );
}
