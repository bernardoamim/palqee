/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  align-items: center;
`;

export const CrumbItem = styled.li`
  list-style: none;
  display: flex;
  font-size: 1rem;
  color: #1a3054;
  display: flex;
  align-items: center;

  > svg {
    margin: 0 1rem;
  }

  > a:hover {
    text-decoration: underline;
  }

  > a.disabled {
    pointer-events: none;
    color: ${props => props.theme.colors.grey};
  }
`;
