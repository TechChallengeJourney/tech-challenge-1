import * as useMediaQuery from '@mui/material/useMediaQuery';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Index from './page';

jest.mock('@mui/material/useMediaQuery');

describe('Bytebank Initial Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display the title "Vantagens do nosso banco"', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(screen.getByText(/Vantagens do nosso banco/i)).toBeInTheDocument();
  });

  it('should render all benefit items', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(screen.getByText('Conta e cartão gratuitos')).toBeInTheDocument();
    expect(screen.getByText('Saques sem custo')).toBeInTheDocument();
    expect(screen.getByText('Programa de pontos')).toBeInTheDocument();
    expect(screen.getByText('Seguro Dispositivos')).toBeInTheDocument();
  });

  it('should display the banner text', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(screen.getByText(/Experimente mais liberdade/i)).toBeInTheDocument();
  });

  it('should render mobile action buttons only on mobile view', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(true); // mobile
    render(<Index />);
    expect(screen.getByText('Abrir conta')).toBeInTheDocument();
    expect(screen.getByText('Já tenho conta')).toBeInTheDocument();
  });

  it('should not render mobile action buttons on desktop view', () => {
    (useMediaQuery.default as jest.Mock).mockReturnValue(false); // desktop
    render(<Index />);
    expect(screen.queryByText('Abrir conta')).not.toBeInTheDocument();
    expect(screen.queryByText('Já tenho conta')).not.toBeInTheDocument();
  });

  it('should call alert when clicking on mobile buttons', () => {
    window.alert = jest.fn();
    (useMediaQuery.default as jest.Mock).mockReturnValue(true); // mobile
    render(<Index />);

    fireEvent.click(screen.getByText('Abrir conta'));
    fireEvent.click(screen.getByText('Já tenho conta'));

    expect(window.alert).toHaveBeenCalledTimes(2);
  });
});