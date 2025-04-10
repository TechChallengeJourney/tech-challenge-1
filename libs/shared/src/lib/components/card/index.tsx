import { Card } from '@mui/material';

export interface BytebankCardProps {
  bgcolor?: string;
  variant?: 'elevation' | 'outlined';
  className?: string;
  children?: React.ReactNode;
}
export function BytebankCard({ bgcolor = '#FFF', variant = 'outlined', children, className }: BytebankCardProps) {
  return (
    <Card variant={variant} sx={{ 'background': bgcolor }}  className={className}>
      {children}
    </Card>
  );
}
