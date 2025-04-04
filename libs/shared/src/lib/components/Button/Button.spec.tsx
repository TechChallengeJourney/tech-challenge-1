import React from 'react';
import { render } from '@testing-library/react';
import { BytebankButton } from './index';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BytebankButton text="Concluir transação" type="ORANGE" outlined={true} />
    );
    expect(baseElement).toBeTruthy();
  });
});
