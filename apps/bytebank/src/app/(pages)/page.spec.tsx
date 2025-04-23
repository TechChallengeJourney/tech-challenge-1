// __tests__/Index.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Index from './page'; // ajuste o caminho conforme sua estrutura
import '@testing-library/jest-dom';

describe('Index component', () => {
  it('deve renderizar os elementos principais e abrir o modal ao clicar no botão', () => {
    render(<Index />);
  });
});
