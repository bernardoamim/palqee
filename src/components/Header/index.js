import React from 'react';

import { Container } from './styles';

function Header() {
  const today = new Date();
  const day = String(today.getDate());
  const month = String(today.getMonth() + 1);
  const year = today.getFullYear();

  const formatedDate = `${day}/${month}/${year}`;

  return (
    <Container>
      <p>{formatedDate}</p>
    </Container>
  );
}

export default Header;
