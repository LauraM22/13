import React from 'react';
import { shallow } from 'enzyme';
import Step4 from '../pages/Step4';

// Mock the Step5 component since it's not the focus of this test
jest.mock('./Step5', () => ({ Step5: 'Step5' }));

// Mock any function that needs to be passed as a prop
const mockBack = jest.fn();

describe('Step4', () => {
  it('should render step 1 form initially', () => {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      companyName: 'Test Company',
      contactNumber: '1234567890',
      contactName: 'Test Contact',
      contact_Number: '0987654321',
    };

    const wrapper = shallow(<Step4 data={data} back={mockBack} />);

    // The form fields should be rendered
    expect(wrapper.find('Field[name="placeOfResidence"]').exists()).toBe(true);
    expect(wrapper.find('Field[name="address"]').exists()).toBe(true);
    // The Next button should be rendered
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('should call back function when Back button is clicked', () => {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      companyName: 'Test Company',
      contactNumber: '1234567890',
      contactName: 'Test Contact',
      contact_Number: '0987654321',
    };

    const wrapper = shallow(<Step4 data={data} back={mockBack} />);

    // Find the Back button and simulate a click event
    wrapper.find('button').at(0).simulate('click');

    // Ensure the back function is called once
    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it('should submit the form and call handleSubmit when Next button is clicked', () => {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      companyName: 'Test Company',
      contactNumber: '1234567890',
      contactName: 'Test Contact',
      contact_Number: '0987654321',
    };

    const wrapper = shallow(<Step4 data={data} back={mockBack} />);

    // Mock the handleSubmit function for the Formik component
    const handleSubmit = jest.fn();
    wrapper.find('Formik').prop('onSubmit')(data);

    // Ensure handleSubmit is called with the correct data
    expect(handleSubmit).toHaveBeenCalledWith(data);
  });
});
