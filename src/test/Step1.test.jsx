import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for additional DOM matching

import Step1 from '../pages/Step1';

describe('Step1 component', () => {
  test('renders form with input fields', () => {
    render(<Step1 />);
    
    // Ensure that input fields and submit button are present in the initial step
    expect(screen.getByLabelText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  test('shows validation error messages for empty fields', () => {
    render(<Step1 />);

    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    // Ensure that validation error messages are shown for empty fields
    expect(screen.getByText('Required')).toBeInTheDocument();
    expect(screen.getAllByText('Required')).toHaveLength(2); // Two empty fields
  });

  test('shows validation error message for invalid email', () => {
    render(<Step1 />);

    const emailInput = screen.getByLabelText(/Email:/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput); // Trigger blur event to perform validation

    // Ensure that the validation error message for invalid email is shown
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  test('calls back function when back button is clicked', () => {
    const mockBack = jest.fn();
    render(<Step1 />);

    // Switch to Step2
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);

    // Get the back button and click it
    const backButton = screen.getByRole('button', { name: /Back/i });
    fireEvent.click(backButton);

    // Ensure that the back function is called
    expect(mockBack).toHaveBeenCalledTimes(1);
  });
});

