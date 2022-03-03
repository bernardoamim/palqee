/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.header`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3.8rem;
  background: #fff;
  height: 5vw;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1;

  > p {
    font-size: 1rem;
    color: #1a3054;
    font-weight: 500;
  }
`;
