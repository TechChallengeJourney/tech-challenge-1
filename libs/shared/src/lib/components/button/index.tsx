'use client';
import Button from '@mui/material/Button';
import './style.scss';
import { styled } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export interface BytebankButtonProps {
  text: string;
  type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  variant?: 'text' | 'contained' | 'outlined';
  sendSubmit?: () => void;
}

export function BytebankButton({
  text,
  type,
  variant,
  sendSubmit,
}: BytebankButtonProps) {
  const ColorButton = styled(Button)(({ theme }) => ({
    '&.MuiButton-containedTertiary:hover': {
      color: 'white',
    },
  }));

  return (
    <div className={`bytebank-button bytebank-button--${type}`}>
      <ColorButton variant={variant} color={type} onClick={sendSubmit}>
        {text}
      </ColorButton>
    </div>
  );
}
