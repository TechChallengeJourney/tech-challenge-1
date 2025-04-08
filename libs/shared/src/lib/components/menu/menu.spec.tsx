import React from 'react';
import { render } from '@testing-library/react';
import { MenuComponent } from './index';

describe('Menu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuComponent />);
    expect(baseElement).toBeTruthy();
  });
});
