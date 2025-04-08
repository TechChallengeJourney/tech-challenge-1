import React from 'react';
import { render } from '@testing-library/react';
import { BytebankText } from './index';

describe('Button', () => {
  it('should render successfully text component', () => {
    const label = "The quick brown fox jumps over the lazy dog";
    const color = "primary";
    const type = "md";

    const { baseElement } = render(
      <BytebankText label={label} color={color} type={type}/>
    );
    expect(baseElement).toBeTruthy();
  });
});