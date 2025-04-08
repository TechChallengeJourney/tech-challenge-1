import React from 'react';
import { render, screen } from '@testing-library/react';
import { BytebankText } from './index';

describe('BytebankText', () => {
  it('should render the text with the correct props', () => {
    const label = "The quick brown fox jumps over the lazy dog";
    const color = "primary";
    const type = "md";

    render(<BytebankText label={label} color={color} type={type} />);

    // Verifica se o texto foi renderizado
    const renderedText = screen.getByText(label);
    expect(renderedText).toBeInTheDocument();

    // Verifica se a classe correspondente à cor foi aplicada
    expect(renderedText.parentElement).toHaveClass(`bytebank-text--${color}`);

    // Verifica se a variante de tipografia foi aplicada corretamente
    expect(renderedText).toHaveClass(`MuiTypography-${type}`);
  });
});