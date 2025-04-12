import React from 'react';
import { render } from '@testing-library/react';
import { BytebankMenu } from './index';

describe('Menu', () => {
  it('should render successfully', () => {
    const routes = []
    const { baseElement } = render(<BytebankMenu routes={routes} />);
    expect(baseElement).toBeTruthy();
  });
});
