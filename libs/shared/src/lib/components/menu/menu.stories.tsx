import { Meta, StoryObj } from '@storybook/react';
import  * as DocBlock from '@storybook/blocks';
import { MenuComponent } from './index';

const meta = {
  title: 'Components/Menu', // O título aqui deve estar correto
  component: MenuComponent,
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
} satisfies Meta<typeof MenuComponent>;

export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const menu: Story = {}