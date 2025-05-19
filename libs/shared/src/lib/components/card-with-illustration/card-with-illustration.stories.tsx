import { Meta, StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import { BytebankCardWithIllustration } from './index';

const meta = {
    title: 'Components/BytebankCardWithIllustration', // O título aqui deve estar correto
    component: BytebankCardWithIllustration,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () =>
                <>
                    <DocBlock.Title />
                    <DocBlock.Description />

                    <DocBlock.Primary />
                    <DocBlock.Controls />

                    <DocBlock.Title>Variações</DocBlock.Title>
                    <DocBlock.Stories />
                </>
        }
    }
} satisfies Meta<typeof BytebankCardWithIllustration>;

export default meta;

type Story = StoryObj<typeof BytebankCardWithIllustration>;


export const Primary: Story = {
    args: {
        variant: 'primary'
    }
};

export const Grey: Story = {
    args: {
        variant: 'grey'
    }
}
