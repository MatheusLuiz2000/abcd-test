import React from 'react';
import { Container, CopyRight } from './styles';
import LeftMenu from '../LeftMenu';

export default function ContainerContent({ children }) {
  return (
    <Container>
      <LeftMenu />
      {children}
      {/* <CopyRight>© 2020 EduEdu, todos os direitos reservados</CopyRight> */}
    </Container>
  );
}
