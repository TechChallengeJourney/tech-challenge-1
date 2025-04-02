'use client';
// import { CustomButton } from './styled';
import Button from '@mui/material/Button';
import './style.scss';

export interface ButtonProps {
  text: string;
  type: 'ORANGE' | 'GREEN' | 'BLACK' | 'NEUTRAL';
  outlined?: boolean;
  sendSubmit?: () => void;
}

export function ButtonComponent({
  text,
  type,
  outlined,
  sendSubmit,
}: ButtonProps) {
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
    <div className={`button-component button-component--${typeColor(type)}`}>
      <div
        className={`${
          outlined ? `button-component--${typeColor(type)}--outlined` : ''
        }`}
      >
        <Button variant="contained" color="primary" onClick={sendSubmit}>
          {text}
        </Button>
      </div>
    </div>

    // <CustomButton
    //   green={type === 'GREEN' ? 'true' : undefined}
    //   orange={type === 'ORANGE' ? 'true' : undefined}
    //   black={type === 'BLACK' ? 'true' : undefined}
    //   neutral={type === 'NEUTRAL' ? 'true' : undefined}
    //   outlined={outlined ? 'true' : undefined}
    //   onClick={sendSubmit}
    // >
    //   {text}
    // </CustomButton>
  );
}
