import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/page';

jest.mock('next/font/google', () => ({
  Inter: jest.fn(() => {return {
    style: {
      fontFamily: 'Inter',
    }
  }}),
}));

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
