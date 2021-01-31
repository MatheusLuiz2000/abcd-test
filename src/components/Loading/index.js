import React from 'react';
import Loader from '../../assets/images/loader.svg';
import { Container } from './styles.js';

export default function Loading() {
  return (
    <Container>
      <img src={Loader} alt="Loader" />
      <h1>Loading... Please wait</h1>
    </Container>
  );
}
