import { Meta, StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import { BytebankHeader } from './index';

const meta = {
    title: 'Components/Header', // O título aqui deve estar correto
    component: BytebankHeader,
    tags: ['autodocs'],
    parameters: {

        docs: {
            page: () =>
                <>
                    <DocBlock.Title />
                    <DocBlock.Description />

                    <DocBlock.Primary />
                    <DocBlock.Controls />
                </>
        }
    }
} satisfies Meta<typeof BytebankHeader>;

export default meta;

type Story = StoryObj<typeof BytebankHeader>;

const routes = [
    {
        name: 'investimentos',
        route: 'investimentos'
    },
    {
        name: 'transferências',
        route: 'transferencias'
    },
    {
        name: 'outros',
        route: 'outros'
    },
]

export const Desktop: Story = {
    args: {
        routes: routes
    },
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        }
    }
};

export const Mobile: Story = {
    args: {
        routes: routes,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        }
    }
}
