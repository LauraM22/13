import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Formik } from 'formik'; // Importando solo Formik para simular el contexto
import * as Yup from 'yup';
import  Step5  from '../pages/Step5';

describe('Step5 Component', () => {
  const data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    companyName: 'Example Company',
    contactNumber: '123456789',
    contactName: 'Jane',
    contact_Number: '987654321',
    placeOfResidence: 'City',
    address: '123 Main St',
    observations: 'Some observation',
  };

  it('should render the form with initial values', () => {
    render(
      <Formik
        initialValues={data}
        validationSchema={Yup.object({
          placeOfResidence: Yup.string().required('Required'),
          address: Yup.string().required('Required'),
        })}
        onSubmit={() => {}}
      >
        <Step5 />
      </Formik>
    );

    const observationsInput = screen.getByLabelText('Observations:');
    expect(observationsInput).toBeInTheDocument();
    expect(observationsInput).toHaveValue(data.observations);

    const backButton = screen.getByText('Back');
    const nextButton = screen.getByText('Next');
    expect(backButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('should display error message when submitting the form with empty fields', async () => {
    render(
      <Formik
        initialValues={data}
        validationSchema={Yup.object({
          placeOfResidence: Yup.string().required('Required'),
          address: Yup.string().required('Required'),
        })}
        onSubmit={() => {}}
      >
        <Step5 />
      </Formik>
    );

    const observationsInput = screen.getByLabelText('Observations:');
    const nextButton = screen.getByText('Next');

    fireEvent.change(observationsInput, { target: { value: '' } });
    fireEvent.click(nextButton);

    const errorMessages = await screen.findAllByText('Required');
    expect(errorMessages).toHaveLength(2); // Two fields are required
  });

  it('should call the handleSubmit function when submitting the form with valid data', () => {
    const handleSubmit = jest.fn();

    render(
      <Formik
        initialValues={data}
        validationSchema={Yup.object({
          placeOfResidence: Yup.string().required('Required'),
          address: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Step5 />
      </Formik>
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(data);
  });
});
