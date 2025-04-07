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
  /**
   * O texto do botão
   */
  label: string;
  /**
   * A cor do botão
   */
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  /**
   * O estilo do botão
   */
  variant?: 'contained' | 'text' | 'outlined';
  sendSubmit?: () => void;
}

export function BytebankButton({
  label,
  color,
  variant,
  sendSubmit,
}: BytebankButtonProps) {
  const ColorButton = styled(Button)(() => ({
    '&.MuiButton-containedTertiary:hover': {
      color: 'white',
    },
  }));

  return (
    <div className={`bytebank-button bytebank-button--${color}`}>
      <ColorButton
        type="submit"
        variant={variant}
        color={color}
        onClick={sendSubmit}
      >
        {label}
      </ColorButton>
    </div>
  );
}
