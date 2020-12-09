import React from 'react';
// ?1.
import styled from '@emotion/styled';
// ?4.
import image from './cryptomonedas.png';
// ?8.
import Form from './components/Form';

// ?2.
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

// ?5.
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

// ?7.
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFFFFF;
  text-align: left;
  font-weight: 700px;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block; 
  }
`;

function App() {
  return (
    // ?3.
    <Container>
      <div>
        <Image 
          // ?6.
          src={image}
          alt="Imagen cryto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomodenas al instante</Heading>
        
        <Form />
      </div>
    </Container>
  );
}

export default App;
