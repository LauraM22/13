import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../pages/Summary';

describe('Summary component', () => {
  it('should render personal information', () => {
    const dataFull = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      // Add other necessary properties for testing
    };

    const wrapper = shallow(<Summary dataFull={dataFull} />);
    const personalInfoSection = wrapper.find('div h2').at(0);
    expect(personalInfoSection.text()).toBe('Personal Information');

    const firstName = wrapper.find('div p').at(0);
    expect(firstName.text()).toBe('First Name: John');

    const lastName = wrapper.find('div p').at(1);
    expect(lastName.text()).toBe('Last Name: Doe');

    const email = wrapper.find('div p').at(2);
    expect(email.text()).toBe('Email: john.doe@example.com');
  });

  it('should render company information', () => {
    // Add test for company information rendering
  });

  it('should render contact information', () => {
    // Add test for contact information rendering
  });

  it('should render address information', () => {
    // Add test for address information rendering
  });

  it('should render observations', () => {
    // Add test for observations rendering
  });

  it('should have the correct styles', () => {
    const dataFull = {
      // Add necessary data for testing
    };

    const wrapper = shallow(<Summary dataFull={dataFull} />);
    const container = wrapper.find('div').at(0);

    expect(container.prop('style')).toEqual({
      backgroundColor: '#f5f5f5',
      padding: '2rem',
      borderRadius: '5px',
      boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    });
  });
});
