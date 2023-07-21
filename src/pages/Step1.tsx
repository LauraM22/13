import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Step2 } from './Step2';
import { first } from 'lodash';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  background-color: blue;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-top: 1rem;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Step1: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const handleSubmit = (values: typeof data) => {
    console.log(values);
    setData({
      ...data,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    });
    setStep(2);
  };

  const back = () => {
    setStep(1);
  };

  return (
    <Container className="card">
      <h2 style={{ marginBottom: '2rem' }}>Personal Information</h2>
      {step === 1 ? (
        <Formik initialValues={data} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form as={ContainerForm}>
            <div>
              <Label htmlFor="firstName">First Name:</Label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name:</Label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <Button type="submit">Next</Button>
          </Form>
        </Formik>
      ) : (
        <Step2 back={back} data={data} />
      )}
    </Container>
  );
};

export default Step1;
