import React from 'react';
import { render } from '@testing-library/react';
import { MenuComponent } from './index';

describe('Menu', () => {
  it('should render successfully', () => {
    const routes = []
    const { baseElement } = render(<MenuComponent routes={routes} />);
    expect(baseElement).toBeTruthy();
  });
});
