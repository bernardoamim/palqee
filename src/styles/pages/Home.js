/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;
