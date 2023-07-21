import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Para simular eventos de usuario
import Step3 from '../pages/Step3';

describe('Step3 Component', () => {
  // Mock de la función de retroceso (back)
  const mockBack = jest.fn();

  // Datos iniciales para el formulario
  const dataFull = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    companyName: 'Example Inc',
    contactNumber: '1234567890',
  };

  it('renders Step3 component with initial data', () => {
    render(<Step3 dataFull={dataFull} back={mockBack} />);
    
    // Verificar que los campos de contacto se rendericen con los valores iniciales
    expect(screen.getByLabelText('Contact name:')).toHaveValue(dataFull.contactName);
    expect(screen.getByLabelText('Contact number:')).toHaveValue(dataFull.contactNumber);
  });

  it('displays error messages when submitting an empty form', async () => {
    render(<Step3 dataFull={dataFull} back={mockBack} />);
    
    // Simular el envío del formulario sin completar los campos
    userEvent.click(screen.getByText('Next'));

    // Verificar que se muestren los mensajes de error
    expect(await screen.findByText('Required')).toBeInTheDocument();
  });

  it('calls the back function when clicking the "Back" button', () => {
    render(<Step3 dataFull={dataFull} back={mockBack} />);
    
    // Simular el clic en el botón "Back"
    userEvent.click(screen.getByText('Back'));

    // Verificar que se llame a la función de retroceso (back)
    expect(mockBack).toHaveBeenCalled();
  });

  it('updates data and moves to Step4 when submitting the form with valid values', () => {
    render(<Step3 dataFull={dataFull} back={mockBack} />);
    
    // Simular el cambio en los campos de contacto
    userEvent.type(screen.getByLabelText('Contact name:'), 'John Smith');
    userEvent.type(screen.getByLabelText('Contact number:'), '9876543210');

    // Simular el envío del formulario con valores válidos
    userEvent.click(screen.getByText('Next'));

    // Verificar que los datos se actualicen correctamente
    expect(screen.getByLabelText('Contact name:')).toHaveValue('John Smith');
    expect(screen.getByLabelText('Contact number:')).toHaveValue('9876543210');

    // Verificar que se haya navegado al componente Step4
    expect(screen.getByText('Step 4')).toBeInTheDocument();
  });
});
