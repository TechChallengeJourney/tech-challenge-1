'use client';
import Button from '@mui/material/Button';
import './style.scss';

export interface BytebankButtonProps {
  text: string;
  type: 'ORANGE' | 'GREEN' | 'BLACK' | 'NEUTRAL';
  outlined?: boolean;
  sendSubmit?: () => void;
}

export function BytebankButton({
  text,
  type,
  outlined,
  sendSubmit,
}: BytebankButtonProps) {
  const typeColor = (
    type: 'ORANGE' | 'GREEN' | 'BLACK' | 'NEUTRAL'
  ): string => {
    const obj = {
      ORANGE: 'orange',
      GREEN: 'green',
      BLACK: 'black',
      NEUTRAL: 'neutral',
    };
    return obj[type];
  };
  return (
    <div className={`bytebank-button bytebank-button--${typeColor(type)}`}>
      <div
        className={`${
          outlined ? `bytebank-button--${typeColor(type)}--outlined` : ''
        }`}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendSubmit}
        >
          {text}
        </Button>
      </div>
    </div>
  );
}
