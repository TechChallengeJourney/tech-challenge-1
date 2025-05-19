import React from 'react';

import styles from './card-with-illustration.module.scss';
import { Box } from '@mui/material';
import { BytebankCard } from '../card';
import { BytebankIllustration } from '../illustration';
import { palette } from '../../shared';

const variantConfig = {
    primary: {
        bgColor: 'primary.main',
        illustrations: ['pixels-01', 'pixels-02'],
    },
    grey: {
        bgColor: 'grey.300',
        illustrations: ['pixels-03', 'pixels-04'],
    },
} as const;

type Variant = keyof typeof variantConfig;

export interface CardWithIllustrationProps {
    variant?: Variant;
    children?: React.ReactNode;
}

export const BytebankCardWithIllustration: React.FC<CardWithIllustrationProps> = ({ children, variant = 'primary' }: CardWithIllustrationProps) => {
    const { bgColor, illustrations } = variantConfig[variant];

    return (
        <BytebankCard bgcolor={palette[bgColor]} className={styles.card}>
            <Box className={styles.topRightDecoration}>
                <BytebankIllustration name={illustrations[0]} variant="lg" />
            </Box>
            <Box className={styles.bottomLeftDecoration}>
                <BytebankIllustration name={illustrations[1]} variant="lg" />
            </Box>
            <div className={styles.children}>
                {children}
            </div>
        </BytebankCard>
    )
}