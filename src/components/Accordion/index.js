import React, { useState } from 'react';
import ChevronDown from '../../assets/svg/ChevronDown';
import Menu from '../../assets/svg/Menu';

import { Container, AccordionHeader, AccordionContent } from './styles';

function Accordion({ title, children, open = true }) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Container>
      <AccordionHeader type="button" onClick={() => setIsOpen(!isOpen)}>
        <Menu height="1.4rem" stroke="#fff" strokeWidth={2} />

        <h4>{title}</h4>

        <ChevronDown
          width="1rem"
          stroke="#fff"
          strokeWidth={2.5}
          className={isOpen ? 'open' : ''}
        />
      </AccordionHeader>
      <AccordionContent className={!isOpen ? 'collapsed' : ''}>
        {children}
      </AccordionContent>
    </Container>
  );
}

export default Accordion;
