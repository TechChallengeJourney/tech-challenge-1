import { Card } from '@mui/material';

export interface BytebankCardProps {
  bgcolor?: string;
  radius?: 'sm' |'md' | 'lg';
  variant?: 'elevation' | 'outlined';
  className?: string;
  children?: React.ReactNode;
}

export enum BytebankCardRadius {
  sm = '5px',
  md = '10px',
  lg = '14px'
}
export function BytebankCard({ bgcolor = '#FFF', radius = 'md', variant = 'outlined', children, className }: BytebankCardProps) {
  return (
    <Card variant={variant} sx={{ 'background': bgcolor, 'borderRadius': BytebankCardRadius[radius] }} className={className}>
      {children}
    </Card>
  );
}
