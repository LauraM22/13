import React from 'react';
import styled from 'styled-components';

interface Props {
  back?: () => void;
  dataFull?: any;
}

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const Summary: React.FC<Props> = ({ dataFull }) => {
  return (
    <Container>
      <Heading>Personal Information</Heading>
      <p>First Name: {dataFull.firstName}</p>
      <p>Last Name: {dataFull.lastName}</p>
      <p>Email: {dataFull.email}</p>
      <Heading>Company Information</Heading>
      <p>Company Name: {dataFull.companyName}</p>
      <p>Contact Number: {dataFull.contactNumber}</p>
      <Heading>Contact Information</Heading>
      <p>Contact Name: {dataFull.contactName}</p>
      <p>Contact Number: {dataFull.contact_Number}</p>
      <Heading>Address Information</Heading>
      <p>Place of Residence: {dataFull.placeOfResidence}</p>
      <p>Address: {dataFull.address}</p>
      <Heading>Observations</Heading>
      <p>Observations: {dataFull.observations}</p>
    </Container>
  );
};

export default Summary;
