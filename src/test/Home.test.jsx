import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para agregar los matchers personalizados

import Home from '../pages/Home';

describe('Home Component', () => {
  it('renders correctly', () => {
    render(<Home />);
    
    // Verificar que el componente se renderice correctamente
    const homeElement = screen.getByTestId('home-component');
    expect(homeElement).toBeInTheDocument();
  });

  it('contains a link to /step1', () => {
    render(<Home />);
    
    // Verificar que el enlace tenga el atributo "to" con el valor "/step1"
    const linkElement = screen.getByRole('link', { name: 'Bienvenidos' });
    expect(linkElement).toHaveAttribute('href', '/step1');
  });

  it('contains a button with "Bienvenidos" text', () => {
    render(<Home />);
    
    // Verificar que exista un botón con el texto "Bienvenidos"
    const buttonElement = screen.getByRole('button', { name: 'Bienvenidos' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('has styles applied correctly', () => {
    render(<Home />);
    
    // Verificar que el div tenga los estilos definidos en "styles.container"
    const containerElement = screen.getByTestId('home-component');
    expect(containerElement).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f5f5f5',
    });
  });
});
