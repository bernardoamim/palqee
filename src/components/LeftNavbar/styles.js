/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: var(--sidebar-width);
  background-color: #1a3054;
  padding: 8rem 0;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 3rem;

  > p {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: rgba(255, 105, 110);
  }

  &.navlink-top-level {
    line-height: 1.8rem;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
    padding-left: 0.7rem;
    margin-right: auto;
    width: 100%;
    transition: 0.3s;
  }

  &.navlink-nested-1 {
    line-height: 1.8rem;
    color: rgb(172, 173, 185);
    font-size: 0.9rem;
    padding-left: 1.5rem;
    margin-right: auto;
    width: 100%;
    transition: 0.3s;

    &:hover {
      background-color: rgba(255, 105, 110, 0.8);
      color: #fff;

      > svg {
        stroke: #fff;
      }
    }
  }
`;
