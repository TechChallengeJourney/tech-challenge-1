'use client';
import './style.scss';

export interface DividerProps {
    type?: 'horizontal' | 'vertical';
    color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'black';
}

export function Divider({
    type = 'horizontal',
    color = 'black'
}: DividerProps) {
    return (
        <div className={`divider divider--${type} divider--${color}`}></div>
    );
}
