import { Meta, StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import { BytebankText, BytebankTextProps } from './index';

const SIMPLE_TEXT = 'The quick brown fox jumps over the lazy dog';

const meta = {
    title: 'Components/Text',
    component: BytebankText,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <DocBlock.Title />
                    <DocBlock.Description />
                    <DocBlock.Primary />
                    <DocBlock.Controls />
                    <DocBlock.Title>Variações</DocBlock.Title>
                    <DocBlock.Stories />
                </>
            ),
        },
    },
} satisfies Meta<typeof BytebankText>;

export default meta;

type Story = StoryObj<BytebankTextProps>;

export const Primary: Story = {
    args: {
        label: SIMPLE_TEXT,
        color: 'primary',
        type: 'sm',
    },
};

export const Secondary: Story = {
    args: {
        label: SIMPLE_TEXT,
        color: 'secondary',
        type: 'md',
    },
};

export const Tertiary: Story = {
    args: {
        label: SIMPLE_TEXT,
        color: 'tertiary',
        type: 'lg',
    },
};


export const Success: Story = {
    args: {
        label: SIMPLE_TEXT,
        color: 'success',
        type: 'sm',
    },
};

export const Warning: Story = {
    args: {
        label: SIMPLE_TEXT,
        color: 'warning',
        type: 'sm',
    },
};

export const Error: Story = {
    args: {
        label: SIMPLE_TEXT,
        color: 'error',
        type: 'sm',
    },
};