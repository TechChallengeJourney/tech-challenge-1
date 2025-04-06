import React from 'react';
import { render } from '@testing-library/react';
import { BytebankInput } from './ControlledInput';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BytebankInput name="nome" label="nome" />);
    expect(baseElement).toBeTruthy();
  });
});
