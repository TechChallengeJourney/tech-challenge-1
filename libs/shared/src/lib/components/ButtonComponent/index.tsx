'use client';
import { CustomButton } from './styled';

export interface ButtonComponentProps {
  text: string;
  type: 'ORANGE' | 'GREEN' | 'BLACK' | 'NEUTRAL';
  outlined?: boolean;
  sendSubmit: () => void;
}

export function ButtonComponent({
  text,
  type,
  outlined,
  sendSubmit,
}: ButtonComponentProps) {
  return (
    <CustomButton
      green={type === 'GREEN' ? 'true' : undefined}
      orange={type === 'ORANGE' ? 'true' : undefined}
      black={type === 'BLACK' ? 'true' : undefined}
      neutral={type === 'NEUTRAL' ? 'true' : undefined}
      outlined={outlined ? 'true' : undefined}
      onClick={sendSubmit}
    >
      {text}
    </CustomButton>
  );
}
