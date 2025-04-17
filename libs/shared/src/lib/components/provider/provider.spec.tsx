import React from 'react';
import { render } from '@testing-library/react';
import { BytebankProvider } from './index';

describe('Provider', () => {
  it('renders successfully with BytebankProvider', () => {
    const { baseElement } = render(
      <BytebankProvider canNavigate={true} routes={[]} >
        Child Component
      </BytebankProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('does not render the header when canNavigate is false', () => {
    const { queryByText } = render(
      <BytebankProvider canNavigate={false} routes={[]} >
        Child Component
      </BytebankProvider>
    );
    expect(queryByText('Mocked BytebankHeader')).not.toBeInTheDocument();
  });
});