import React from 'react';
import HomeIcon from '../../assets/svg/HomeIcon';
import UserCircle from '../../assets/svg/UserCircle';
import Accordion from '../Accordion';
import { Container, NavContainer, NavLink } from './styles';

function LeftNavbar() {
  return (
    <Container>
      <NavContainer>
        <NavLink href="/" className="navlink-top-level">
          <HomeIcon height="1.2rem" stroke="#fff" strokeWidth={2} />
          <p>Home</p>
        </NavLink>

        <Accordion open key="StarWars" title="Star Wars">
          <NavLink href="/" className="navlink-nested-1">
            <UserCircle
              height="1.2rem"
              stroke="rgb(172, 173, 185)"
              strokeWidth={2}
              fill="none"
            />
            <p>Characters</p>
          </NavLink>
        </Accordion>
      </NavContainer>
    </Container>
  );
}

export default LeftNavbar;
