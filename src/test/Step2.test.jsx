import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import  Step2 from '../pages/Step2';

// Mock the Step3 component since we don't need to test it here
jest.mock('./Step3', () => ({ Step3: () => <div>Step 3 component</div> }));

// Helper function to render Step2 component wrapped inside Formik
const renderStep2 = (data = {}) => {
  return render(
    <Formik initialValues={data} validationSchema={Yup.object()} onSubmit={() => {}}>
      <Step2 data={data} />
    </Formik>
  );
};

describe('Step2 component', () => {
  it('should render Step2 form correctly', () => {
    const { getByLabelText, getByText } = renderStep2();

    // Check if form elements are rendered correctly
    expect(getByLabelText('Company name:')).toBeInTheDocument();
    expect(getByLabelText('Contact number:')).toBeInTheDocument();

    // Check if buttons are rendered correctly
    expect(getByText('Back')).toBeInTheDocument();
    expect(getByText('Next')).toBeInTheDocument();
  });

  it('should show validation errors when form is submitted with empty fields', () => {
    const { getByText } = renderStep2();

    const nextButton = getByText('Next');
    fireEvent.click(nextButton);

    // Validation errors should be displayed when the form is submitted with empty fields
    expect(getByText('Required')).toBeInTheDocument();
  });

  it('should call the back function when Back button is clicked', () => {
    const mockBackFunction = jest.fn();
    const { getByText } = renderStep2({ firstName: 'John', lastName: 'Doe', email: 'john@example.com' });

    const backButton = getByText('Back');
    fireEvent.click(backButton);

    // The back function should be called when the Back button is clicked
    expect(mockBackFunction).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed for other scenarios
});
