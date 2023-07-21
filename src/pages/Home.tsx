import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  /* Add your button styles here */
  /* Example: */
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const Home = () => { 
  return (
    <HomeContainer>
      <Link to={'/step1'}>
        <Button>Bienvenidos</Button>
      </Link>
    </HomeContainer>
  );
};
