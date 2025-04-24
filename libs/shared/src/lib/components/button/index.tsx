'use client';
import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import './style.scss';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    black: true;
    white: true;
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
    | 'warning'
    | 'black'
    | 'white';
  /**
   * O estilo do botão
   */
  variant?: 'contained' | 'text' | 'outlined';
  sendSubmit?: () => void;
}

const ColorButton = styled(Button)<ButtonProps>(() => ({
  '&.MuiButton-containedTertiary:hover': {
    color: 'white',
  },
}));

export function BytebankButton({
  label,
  color,
  variant,
  sendSubmit,
}: BytebankButtonProps) {
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
