import React from 'react';
import { Container } from './styles';
import LeftMenu from '../LeftMenu';

export default function ContainerContent({ children }) {
  return (
    <Container>
      <LeftMenu />
      {children}
    </Container>
  );
}
