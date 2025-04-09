import React from 'react';
import { render, screen } from '@testing-library/react';
import { BytebankText } from './index';

describe('BytebankText', () => {
  it('should render the label correctly', () => {
    const label = "The quick brown fox jumps over the lazy dog";
    const color = "primary";
    const type = "md";

    render(<BytebankText label={label} color={color} type={type} />);

    const textElement = screen.getByText(label);
    expect(textElement).toBeInTheDocument();
  });
});
