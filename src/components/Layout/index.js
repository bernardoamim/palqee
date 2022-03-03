import React from 'react';
import { Container, Content } from './styles';
import LeftNavbar from '../LeftNavbar';
import Header from '../Header';

function Layout({ children }) {
  return (
    <Container>
      <LeftNavbar />
      <Content>
        <Header />
        {children}
      </Content>
    </Container>
  );
}

export default Layout;
