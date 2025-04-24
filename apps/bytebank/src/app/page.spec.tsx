import { render, screen, fireEvent } from '@testing-library/react';
import Index from './page'; // Ajuste se o caminho for diferente
import '@testing-library/jest-dom';
import * as useMediaQuery from '@mui/material/useMediaQuery';

jest.mock('@mui/material/useMediaQuery');

describe('Página principal do Bytebank', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve exibir o título "Vantagens do nosso banco"', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(screen.getByText(/Vantagens do nosso banco/i)).toBeInTheDocument();
  });

  it('deve renderizar todos os benefícios', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(
      screen.getByText('Conta e cartão gratuitos')
    ).toBeInTheDocument();
    expect(screen.getByText('Saques sem custo')).toBeInTheDocument();
    expect(screen.getByText('Programa de pontos')).toBeInTheDocument();
    expect(screen.getByText('Seguro Dispositivos')).toBeInTheDocument();
  });

  it('deve renderizar o texto do banner', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(
      screen.getByText(/Experimente mais liberdade/i)
    ).toBeInTheDocument();
  });

  it('deve mostrar os botões mobile apenas se for mobile', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(true); // mobile
    render(<Index />);
    expect(screen.getByText('Abrir conta')).toBeInTheDocument();
    expect(screen.getByText('Já tenho conta')).toBeInTheDocument();
  });

  it('não deve mostrar botões mobile se não for mobile', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(screen.queryByText('Abrir conta')).not.toBeInTheDocument();
    expect(screen.queryByText('Já tenho conta')).not.toBeInTheDocument();
  });

  it('deve chamar alert ao clicar nos botões mobile', () => {
    window.alert = jest.fn();
    (useMediaQuery.default as jest.Mock).mockReturnValue(true); // mobile
    render(<Index />);

    fireEvent.click(screen.getByText('Abrir conta'));
    fireEvent.click(screen.getByText('Já tenho conta'));

    expect(window.alert).toHaveBeenCalledTimes(2);
  });
});
