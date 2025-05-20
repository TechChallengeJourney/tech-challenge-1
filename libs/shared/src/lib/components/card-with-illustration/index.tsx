import React from 'react';

import styles from './card-with-illustration.module.scss';
import { BytebankCard } from '../card';
import { palette } from '../../shared';

const variantConfig = {
    primary: {
        bgColor: 'primary.main',
    },
    grey: {
        bgColor: 'grey.300',
    },
} as const;

type Variant = keyof typeof variantConfig;

export interface CardWithIllustrationProps {
    variant?: Variant;
    children?: React.ReactNode;
    className?: string;
}

export const BytebankCardWithIllustration: React.FC<CardWithIllustrationProps> = ({className, children, variant = 'primary' }: CardWithIllustrationProps) => {
    const { bgColor } = variantConfig[variant];

    return (
        <BytebankCard bgcolor={palette[bgColor]} className={`${className} ${styles.card} ${styles[`card--${variant}`]}`} >
            <div className={styles.children}>
                {children}
            </div>
        </BytebankCard>
    )
}